import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppFeatureState } from './app.state';
import { BmrMethod } from '../models/bmr-method.enum';

const getAppFeatureState = createFeatureSelector<AppFeatureState>('app');

export const getHeight = createSelector(
  getAppFeatureState,
  state => state.height
);

export const getWeight = createSelector(
  getAppFeatureState,
  state => state.weight
);

export const getAge = createSelector(
  getAppFeatureState,
  state => state.age
);

export const getGender = createSelector(
  getAppFeatureState,
  state => state.gender
);

export const getActivityLevel = createSelector(
  getAppFeatureState,
  state => state.activityLevel
);

export const getBmrMethod = createSelector(
  getAppFeatureState,
  state => state.bmrMethod
);

export const getMacroPreference = createSelector(
  getAppFeatureState,
  state => state.macroPreference
);

const bmrHeightFactor = 6.25;
const bmrWeightFactor = 9.99;
const bmrAgeFactor = 4.92;
const katchMcArdleBaseValue = 370;
const katchMcArdleFactor = 21.6;

export const getBodyFatPercentage = createSelector(
  getAppFeatureState,
  state => state.bodyFatPercentage
);

export const getLeanBodyMass = createSelector(
  getWeight,
  getBodyFatPercentage,
  (weight, bodyFatPercentage) =>
    (weight * (100 - (bodyFatPercentage))) / 100
);

export const getBmr = createSelector(
  getBmrMethod,
  getHeight,
  getWeight,
  getAge,
  getLeanBodyMass,
  (bmrMethod, height, weight, age, leanBodyMass) => {
    if (bmrMethod === BmrMethod.Basic) {
      return (height * bmrHeightFactor) +
        (weight * bmrWeightFactor) -
        (age * bmrAgeFactor) + 5;
    } else {
      return katchMcArdleBaseValue + (katchMcArdleFactor * leanBodyMass);
    }
  });

export const getTdee = createSelector(
  getBmr,
  getActivityLevel,
  (bmr, activityLevel) => bmr * activityLevel
);

export const getTdeeLoseWeight = createSelector(
  getTdee,
  tdee => tdee - 400
);

export const getTdeeGainWeight = createSelector(
  getTdee,
  tdee => tdee + 400
);
