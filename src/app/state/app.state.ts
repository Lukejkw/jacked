import { Gender } from '../models/gender.enum';
import { ActivityLevel } from '../models/activity-level.enum';
import { BmrMethod } from '../models/bmr-method.enum';
import { MacroBreakdown } from '../models/macro-breakdown.enum';

export interface AppFeatureState {
  bodyFatPercentage: any;
  bmrMethod: BmrMethod;
  age: number;
  height: number;
  weight: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  macroPreference: MacroBreakdown;
}

export interface State {
  app: AppFeatureState;
}
