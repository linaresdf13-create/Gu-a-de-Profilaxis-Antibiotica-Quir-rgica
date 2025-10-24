import React from 'react';
import { Specialty } from '../types';
import { HeartIcon, BrainIcon, BoneIcon, StomachIcon, WomanIcon } from './IconComponents';

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    neuro: BrainIcon,
    cardiovascular: HeartIcon,
    gastro: StomachIcon,
    ortopedia: BoneIcon,
    gineco: WomanIcon,
};


interface SpecialtySelectorProps {
  specialties: Specialty[];
  onSelect: (specialtyId: string) => void;
}

const SpecialtySelector: React.FC<SpecialtySelectorProps> = ({ specialties, onSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Seleccione la Especialidad Quirúrgica</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {specialties.map((specialty) => {
          const Icon = iconMap[specialty.id] || BrainIcon;
          return (
            <button
              key={specialty.id}
              onClick={() => onSelect(specialty.id)}
              className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border-2 border-transparent hover:border-sky-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
                <Icon className="w-12 h-12 text-slate-400 group-hover:text-sky-500 transition-colors duration-300 mb-3" />
                <span className="text-center font-semibold text-slate-700 group-hover:text-sky-600 transition-colors duration-300">
                    {specialty.name}
                </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialtySelector;
