import { Action } from '@ngrx/store';
import { TdeeData } from '../models/tdee-data';

export enum AppActionTypes {
  SetTdeeData = '[App] Set TDEE data'
}

export class SetTdeeData implements Action {
  readonly type = AppActionTypes.SetTdeeData;

  constructor(public tdeeData: TdeeData) {}
}

export type AppActions = SetTdeeData;
