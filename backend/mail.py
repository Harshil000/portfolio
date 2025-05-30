from flask import Flask, request
from flask_cors import CORS
import smtplib
import os
from dotenv import load_dotenv, dotenv_values

app = Flask(__name__)
CORS(app, origins=["https://portfolio-harshil000s-projects.vercel.app"], supports_credentials=True)
load_dotenv()

@app.route("/")
def home():
    return "Welcome to the email sending service!"

@app.route("/sendMail", methods=["POST"])
def sendMail():
    senderEmail = "techshock01@gmail.com"
    receiverEmail = "harshilu01@gmail.com"

    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    
    subject = "New message from your website"
    
    text = f"Name :- {name} \nEmail :- {email} \nMessage :- {message}"
    
    email = f"Subject: {subject}\n\n{text}"

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    server.login(senderEmail, os.getenv("PASSWORD"))  # Replace with your actual password

    server.sendmail(senderEmail, receiverEmail, email)

    print("Email sent successfully")
    server.quit()
    return "Email sent successfully"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)