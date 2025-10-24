import React, { useState, useCallback } from 'react';
import { PROPHYLAXIS_DATA } from './constants/data';
import { Selections, Specialty, Procedure as ProcedureType } from './types';
import SpecialtySelector from './components/SpecialtySelector';
import ProcedureSelector from './components/ProcedureSelector';
import PatientFactors from './components/PatientFactors';
import Results from './components/Results';
import ProgressBar from './components/ProgressBar';
import { StethoscopeIcon } from './components/IconComponents';

const HomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
    <div className="text-center p-8">
        <StethoscopeIcon className="w-24 h-24 mx-auto text-sky-600" />
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-6 mb-3">Guía de Profilaxis Antibiótica</h1>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Herramienta de soporte a la decisión clínica para la selección del antibiótico profiláctico adecuado antes de un procedimiento quirúrgico.
        </p>
        <button
            onClick={onStart}
            className="bg-sky-600 text-white font-bold py-3 px-10 rounded-full hover:bg-sky-700 transition-colors shadow-lg text-lg"
        >
            Iniciar Guía
        </button>
    </div>
);

function App() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Selections>({
    specialtyId: null,
    procedureId: null,
    hasAllergy: false,
    isHighRisk: false,
  });

  const handleStart = useCallback(() => setStep(1), []);
  const handleReset = useCallback(() => {
    setSelections({
      specialtyId: null,
      procedureId: null,
      hasAllergy: false,
      isHighRisk: false,
    });
    setStep(0);
  }, []);

  const handleSpecialtySelect = useCallback((specialtyId: string) => {
    setSelections(prev => ({ ...prev, specialtyId, procedureId: null }));
    setStep(2);
  }, []);

  const handleProcedureSelect = useCallback((procedureId: string) => {
    setSelections(prev => ({ ...prev, procedureId }));
    setStep(3);
  }, []);
  
  const handleFactorsSubmit = useCallback((factors: { hasAllergy: boolean; isHighRisk: boolean }) => {
    setSelections(prev => ({ ...prev, ...factors }));
    setStep(4);
  }, []);

  const handleBack = useCallback(() => {
    if (step > 1) {
      setStep(prev => prev - 1);
    } else {
      handleReset();
    }
  }, [step, handleReset]);

  const selectedSpecialty = selections.specialtyId ? PROPHYLAXIS_DATA.find(s => s.id === selections.specialtyId) : null;
  const selectedProcedure = selectedSpecialty && selections.procedureId ? selectedSpecialty.procedures.find(p => p.id === selections.procedureId) : null;
  
  const steps = ['Inicio', 'Especialidad', 'Procedimiento', 'Factores', 'Resultado'];
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SpecialtySelector specialties={PROPHYLAXIS_DATA} onSelect={handleSpecialtySelect} />;
      case 2:
        return selectedSpecialty ? <ProcedureSelector specialty={selectedSpecialty} onSelect={handleProcedureSelect} /> : null;
      case 3:
        return <PatientFactors onSubmit={handleFactorsSubmit} />;
      case 4:
        return selectedProcedure ? <Results procedure={selectedProcedure} selections={selections} /> : null;
      default:
        return <HomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {step > 0 && (
          <header className="p-4 sm:p-6 border-b border-slate-200">
              <ProgressBar currentStep={step} totalSteps={steps.length} stepNames={steps} />
          </header>
        )}
        <main className="p-4 sm:p-8">
            {renderStep()}
        </main>
        <footer className="px-4 sm:px-8 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
            {step > 0 && (
                <button
                    onClick={handleBack}
                    className="text-slate-600 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors"
                >
                    {step === 1 ? 'Cancelar' : 'Atrás'}
                </button>
            )}
            {step === 4 && (
                <button
                    onClick={handleReset}
                    className="bg-sky-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors shadow-md"
                >
                    Comenzar de Nuevo
                </button>
            )}
        </footer>
      </div>
      <p className="text-center text-xs text-slate-400 mt-4">Esta es una herramienta de soporte y no reemplaza el juicio clínico.</p>
    </div>
  );
}

export default App;
