export interface DosingInfo {
  antibiotic: string;
  dose: string;
  details?: string[];
}

export interface Recommendation {
  primary: DosingInfo[] | null;
  alternative: DosingInfo[] | null;
  notes?: string[];
}

export interface Procedure {
  id: string;
  name: string;
  recommendation: Recommendation;
}

export interface Specialty {
  id: string;
  name: string;
  procedures: Procedure[];
}

export interface Selections {
  specialtyId: string | null;
  procedureId: string | null;
  hasAllergy: boolean;
  isHighRisk: boolean;
}
