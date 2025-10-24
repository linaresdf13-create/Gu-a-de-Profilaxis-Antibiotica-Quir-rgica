import React, { useState } from 'react';

interface PatientFactorsProps {
  onSubmit: (factors: { hasAllergy: boolean; isHighRisk: boolean }) => void;
}

const PatientFactors: React.FC<PatientFactorsProps> = ({ onSubmit }) => {
  const [hasAllergy, setHasAllergy] = useState(false);
  const [isHighRisk, setIsHighRisk] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ hasAllergy, isHighRisk });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Factores del Paciente</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="text-lg font-semibold text-slate-700 mb-3 block">
            ¿El paciente tiene alergia a Penicilina/Beta-lactámicos?
          </label>
          <div className="flex space-x-4">
            <label className="flex-1 p-4 border rounded-lg cursor-pointer transition-all" data-active={!hasAllergy} style={{ borderColor: !hasAllergy ? 'rgb(14 165 233)' : '#e2e8f0', backgroundColor: !hasAllergy ? 'rgb(240 249 255)' : 'white'}}>
              <input
                type="radio"
                name="allergy"
                checked={!hasAllergy}
                onChange={() => setHasAllergy(false)}
                className="mr-3"
              />
              No
            </label>
            <label className="flex-1 p-4 border rounded-lg cursor-pointer transition-all" data-active={hasAllergy} style={{ borderColor: hasAllergy ? 'rgb(14 165 233)' : '#e2e8f0', backgroundColor: hasAllergy ? 'rgb(240 249 255)' : 'white'}}>
              <input
                type="radio"
                name="allergy"
                checked={hasAllergy}
                onChange={() => setHasAllergy(true)}
                className="mr-3"
              />
              Sí
            </label>
          </div>
        </div>

        <div>
           <label className="text-lg font-semibold text-slate-700 mb-3 block">
            ¿Tiene el paciente factores de riesgo para MDR?
            <span className="text-sm font-normal text-slate-500 block">(Hospitalización reciente, uso de ATB, etc.)</span>
          </label>
          <div className="flex space-x-4">
             <label className="flex-1 p-4 border rounded-lg cursor-pointer transition-all" data-active={!isHighRisk} style={{ borderColor: !isHighRisk ? 'rgb(14 165 233)' : '#e2e8f0', backgroundColor: !isHighRisk ? 'rgb(240 249 255)' : 'white'}}>
              <input
                type="radio"
                name="highRisk"
                checked={!isHighRisk}
                onChange={() => setIsHighRisk(false)}
                className="mr-3"
              />
              No
            </label>
            <label className="flex-1 p-4 border rounded-lg cursor-pointer transition-all" data-active={isHighRisk} style={{ borderColor: isHighRisk ? 'rgb(14 165 233)' : '#e2e8f0', backgroundColor: isHighRisk ? 'rgb(240 249 255)' : 'white'}}>
              <input
                type="radio"
                name="highRisk"
                checked={isHighRisk}
                onChange={() => setIsHighRisk(true)}
                className="mr-3"
              />
              Sí
            </label>
          </div>
        </div>
        
        <div className="text-center pt-4">
          <button type="submit" className="bg-sky-600 text-white font-bold py-3 px-10 rounded-full hover:bg-sky-700 transition-colors shadow-lg text-lg">
            Ver Recomendación
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientFactors;
