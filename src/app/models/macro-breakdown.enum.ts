export enum MacroBreakdown {
  Keto = 'Ketogenic',
  Bodybuilding = 'Bodybuilding style macros',
  Endurance = 'Endurance',
  Flexible = 'Don\'t worry about carbs or fats'
}

export interface Breakdown {
  carbs: string;
  fats: string;
  protein: string;
}

const macroBreakDown: { [macro in MacroBreakdown]: Breakdown } = {
  'Ketogenic': {
    carbs: '10',
    fats: '60',
    protein: '30'
  },
  'Bodybuilding style macros': {
    carbs: '30',
    fats: '20',
    protein: '40'
  },
  'Endurance': {
    carbs: '40',
    fats: '30',
    protein: '30'
  },
  'Don\'t worry about carbs or fats': {
    carbs: '0 - 50',
    fats: '20 - 60',
    protein: '30'
  },
};

export const createBreakdown = (breakdown: MacroBreakdown) => macroBreakDown[breakdown];
