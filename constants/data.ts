import { Specialty } from '../types';

export const PROPHYLAXIS_DATA: Specialty[] = [
  {
    id: 'neuro',
    name: 'Neurocirugía',
    procedures: [
      {
        id: 'craniotomy',
        name: 'Craneotomía, Cirugía de Columna',
        recommendation: {
          primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar cada 4 horas de cirugía.'] }],
          alternative: [
            { antibiotic: 'Vancomicina', dose: '< 80 kg: 1 gr, 80-99 kg: 1.25 gr, 100-120 kg: 1.5 gr, >120 kg: 2 gr', details: ['No requiere redosificación intraoperatoria.'] },
            { antibiotic: 'Aztreonam', dose: '2 gr IV', details: ['Redosificar cada 4 horas de cirugía.'] }
          ],
          notes: ['Posterior al cierre, se continúa Cefazolina 2g c/6 hrs hasta completar 24 hrs.', 'Si no se alcanza a recibir Vancomicina en infusión de 2 horas, administrar Clindamicina 600mg (≤60kg) o 900mg (>60kg).']
        },
      },
      {
        id: 'neuro_complex',
        name: 'Neurocirugía compleja y de base de cráneo',
        recommendation: {
            primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar cada 4 horas de cirugía.'] }],
            alternative: [
                { antibiotic: 'Clindamicina', dose: '600mg (≤60kg) o 900mg (>60kg)', details: ['Redosificar por cada 6 hrs de cirugía.'] },
                { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
            ],
            notes: ['Para pacientes con rastreo de S. aureus MR positivo, usar Vancomicina.', 'Para Enterobacteral tipo BLEES, usar Meropenem 2gr IV.']
        }
      }
    ],
  },
  {
    id: 'cardiovascular',
    name: 'Cirugía Cardiovascular',
    procedures: [
        {
            id: 'revascularizacion',
            name: 'Revascularización, Reemplazo valvular, Implante de Marcapasos',
            recommendation: {
                primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificación c/2 horas si hay circulación extracorpórea.'] }],
                alternative: [
                    { antibiotic: 'Vancomicina', dose: '< 80 kg: 1 gr, 80-99 kg: 1.25 gr, 100-120 kg: 1.5 gr, >120 kg: 2 gr' },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
                ],
                notes: ['Si no se puede administrar Vancomicina por alergia/intolerancia, usar Clindamicina 600mg (≤60kg) o 900mg (>60kg).']
            }
        }
    ]
  },
  {
    id: 'gastro',
    name: 'Cirugía Gastrointestinal',
    procedures: [
        {
            id: 'esofago',
            name: 'Esófago, Estómago, Bariátrica, Duodeno, Vía Biliar',
            recommendation: {
                primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar por c/4 horas de cirugía.'] }],
                alternative: [
                    { antibiotic: 'Clindamicina', dose: '600mg (≤60kg) o 900mg (>60kg)', details: ['Redosificar por cada 6 hrs de cirugía.'] },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
                ]
            }
        },
        {
            id: 'intestino',
            name: 'Intestino Delgado, Colon, Recto, Apendicitis no complicada',
            recommendation: {
                primary: [{ antibiotic: 'Ampicilina/Sulbactam', dose: '3g EV', details: ['Redosificar por c/4 horas de cirugía.'] }],
                alternative: [
                    { antibiotic: 'Clindamicina', dose: '600mg (≤60kg) o 900mg (>60kg)', details: ['Redosificar por cada 6 hrs de cirugía.'] },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
                ],
                notes: ['Si hay uso previo de ATB o riesgo de BLEE, considerar Ertapenem 1g.']
            }
        }
    ]
  },
  {
    id: 'ortopedia',
    name: 'Cirugía Ortopédica',
    procedures: [
        {
            id: 'artroplastia',
            name: 'Implante de Osteosíntesis, Laminectomía, Artroplastia',
            recommendation: {
                primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar por c/4 horas de cirugía.'] }],
                alternative: [
                    { antibiotic: 'Clindamicina', dose: '600mg (≤60kg) o 900mg (>60kg)', details: ['Redosificar por cada 6 hrs de cirugía.'] },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
                ]
            }
        },
        {
            id: 'protesis',
            name: 'Implante de Prótesis Articulares',
            recommendation: {
                primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar por c/4 horas de cirugía.', 'Se puede continuar c/8 horas hasta 24 horas postqx.'] }],
                alternative: [
                    { antibiotic: 'Vancomicina', dose: '< 80 kg: 1 gr, 80-99 kg: 1.25 gr, 100-120 kg: 1.5 gr, >120 kg: 2 gr', details: ['Continuar cada 12 horas por 24 horas.'] },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs y continuar c/8h por 24h.'] }
                ],
                notes: ['Si hay alergia o intolerancia a Vancomicina, usar Clindamicina.']
            }
        }
    ]
  },
  {
      id: 'gineco',
      name: 'Ginecología y Obstetricia',
      procedures: [
          {
              id: 'cesarea',
              name: 'Cesárea, Histerectomía',
              recommendation: {
                  primary: [{ antibiotic: 'Cefazolina', dose: '2g (<120kg) o 3g (≥120kg)', details: ['Redosificar por c/4 horas de cirugía.'] }],
                  alternative: [
                    { antibiotic: 'Clindamicina', dose: '600mg (≤60kg) o 900mg (>60kg)', details: ['Redosificar por cada 6 hrs de cirugía.'] },
                    { antibiotic: 'Aztreonam', dose: '2 gr', details: ['Redosificar cada 4 hrs de cirugía.'] }
                  ],
                  notes: ['Si no es alérgico a Penicilinas se adiciona Cefazolina a la alternativa.']
              }
          },
          {
              id: 'laparoscopia_ginecologica',
              name: 'Laparoscopias ginecológicas',
              recommendation: {
                  primary: null,
                  alternative: null,
                  notes: ['Se deja a criterio de cirujano el uso de Cefazolina.']
              }
          }
      ]
  }
];
