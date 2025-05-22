import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SkillBarProps {
  name: string;
  level: number; // 1-5
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, className = '' }) => {
  const percentage = (level / 5) * 100;

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(`.bar-${name}`, {
      width: '0%',
      scrollTrigger: {
        trigger: `.bar-${name}`,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        // markers: true, // Uncomment for debugging
      },
      duration: 1,
      ease: 'power2.out',
    });
  }, [name]);

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out bar-${name}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;