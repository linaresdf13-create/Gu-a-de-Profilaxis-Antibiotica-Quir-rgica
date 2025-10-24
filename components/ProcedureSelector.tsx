import React from 'react';
import { Specialty } from '../types';

interface ProcedureSelectorProps {
  specialty: Specialty;
  onSelect: (procedureId: string) => void;
}

const ProcedureSelector: React.FC<ProcedureSelectorProps> = ({ specialty, onSelect }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Seleccione el Procedimiento</h2>
      <div className="space-y-3">
        {specialty.procedures.map((procedure) => (
          <button
            key={procedure.id}
            onClick={() => onSelect(procedure.id)}
            className="w-full text-left p-4 bg-slate-50 rounded-lg hover:bg-sky-100 hover:text-sky-800 transition-colors font-medium text-slate-700 border border-slate-200"
          >
            {procedure.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProcedureSelector;
