import React from 'react';
import { Procedure, Selections, DosingInfo } from '../types';
import { PillIcon, CheckCircleIcon, AlertTriangleIcon } from './IconComponents';

const RecommendationCard: React.FC<{ title: string; recommendations: DosingInfo[] | null; icon: React.ReactNode }> = ({ title, recommendations, icon }) => (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold text-slate-800 ml-3">{title}</h3>
        </div>
        {recommendations && recommendations.length > 0 ? (
            <div className="space-y-4">
                {recommendations.map((rec, index) => (
                    <div key={index} className="pl-2">
                        <p className="font-semibold text-slate-700 flex items-center">
                            <PillIcon className="w-5 h-5 mr-2 text-sky-500" />
                            {rec.antibiotic}
                        </p>
                        <p className="text-slate-600 ml-7"><strong>Dosis:</strong> {rec.dose}</p>
                        {rec.details && rec.details.map((detail, i) => (
                            <p key={i} className="text-sm text-slate-500 ml-7 mt-1">{detail}</p>
                        ))}
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-slate-600">No se requiere profilaxis antibiótica para este procedimiento.</p>
        )}
    </div>
);


interface ResultsProps {
  procedure: Procedure;
  selections: Selections;
}

const Results: React.FC<ResultsProps> = ({ procedure, selections }) => {
  const { recommendation } = procedure;
  const showAlternative = selections.hasAllergy || selections.isHighRisk;

  const primaryRec = showAlternative ? recommendation.alternative : recommendation.primary;
  const primaryTitle = showAlternative ? "Recomendación Alternativa (Alergia/Riesgo)" : "Recomendación Primaria";
  
  const alternativeRec = showAlternative ? recommendation.primary : recommendation.alternative;
  const alternativeTitle = showAlternative ? "Opción Estándar (Sin Alergia/Riesgo)" : "Alternativa (Alergia/Riesgo)";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">Recomendación Final</h2>
      <p className="text-center text-slate-600 -mt-2 mb-8">Para: <strong>{procedure.name}</strong></p>
      
      <RecommendationCard 
        title={primaryTitle}
        recommendations={primaryRec}
        icon={<CheckCircleIcon className="w-8 h-8 text-green-500" />}
      />

      {alternativeRec && (
        <RecommendationCard 
            title={alternativeTitle}
            recommendations={alternativeRec}
            icon={<AlertTriangleIcon className="w-8 h-8 text-amber-500" />}
        />
      )}

      {recommendation.notes && recommendation.notes.length > 0 && (
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <h4 className="font-bold text-blue-800">Notas Adicionales:</h4>
          <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
            {recommendation.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Results;
