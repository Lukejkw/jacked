
import { AppActions, AppActionTypes } from './app.actions';
import { routerReducer } from '@ngrx/router-store';
import { AppFeatureState } from './app.state';
import { Gender } from '../models/gender.enum';
import { ActivityLevel } from '../models/activity-level.enum';
import { BmrMethod } from '../models/bmr-method.enum';
import { MacroBreakdown } from '../models/macro-breakdown.enum';

export const initialState: AppFeatureState = {
  age: 25,
  height: 180,
  gender: Gender.Male,
  weight: 85,
  activityLevel: ActivityLevel.ModeratelyActive,
  bodyFatPercentage: 20,
  bmrMethod: BmrMethod.Basic,
  macroPreference: MacroBreakdown.Bodybuilding
};

export function appReducer(
  state: AppFeatureState = initialState,
  action: AppActions
): AppFeatureState {
  switch (action.type) {
    case AppActionTypes.SetTdeeData:
      return {
        ...state,
        ...action.tdeeData
      };

    default:
      return state;
  }
}

export const reducers = {
  router: routerReducer,
  app: appReducer
};
