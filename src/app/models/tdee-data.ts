import { Gender } from './gender.enum';
import { ActivityLevel } from './activity-level.enum';
import { BmrMethod } from './bmr-method.enum';
import { MacroBreakdown } from './macro-breakdown.enum';

export interface TdeeData {
  age: number;
  height: number;
  weight: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  bodyFatPercentage: number;
  method: BmrMethod;
  macroPreference: MacroBreakdown;
}
