import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepNames }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        {stepNames.slice(1).map((name, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep >= stepNumber;
            return (
                 <div key={name} className={`text-xs text-center ${isActive ? 'font-bold text-sky-600' : 'text-slate-400'}`} style={{flexBasis: '100%'}}>
                    {name}
                </div>
            )
        })}
      </div>
      <div className="relative w-full bg-slate-200 rounded-full h-2">
        <div
          className="absolute top-0 left-0 bg-sky-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 2)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
