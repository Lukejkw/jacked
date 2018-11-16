import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getHeight, getActivityLevel, getWeight, getAge, getGender, getBodyFatPercentage, getBmrMethod, getTdee, getTdeeLoseWeight, getTdeeGainWeight, getMacroPreference } from 'src/app/state';
import { Observable } from 'rxjs';
import { Gender } from 'src/app/models/gender.enum';
import { ActivityLevel } from 'src/app/models/activity-level.enum';
import { TdeeData } from 'src/app/models/tdee-data';
import * as actions from '../../state/app.actions';
import { BmrMethod } from 'src/app/models/bmr-method.enum';
import { MacroBreakdown } from 'src/app/models/macro-breakdown.enum';

@Component({
  selector: 'tdee-shell',
  templateUrl: './tdee-shell.component.html',
  styleUrls: ['./tdee-shell.component.scss']
})
export class TdeeShellComponent implements OnInit {
  height$: Observable<number>;
  weight$: Observable<number>;
  age$: Observable<number>;
  gender$: Observable<Gender>;
  activityLevel$: Observable<ActivityLevel>;
  bodyFatPercentage$: Observable<any>;
  method$: Observable<BmrMethod>;
  tdee$: Observable<number>;
  tdeeLoseWeight$: Observable<number>;
  tdeeGainWeight$: Observable<number>;
  macroPreference$: Observable<MacroBreakdown>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.height$ = this.store.pipe(select(getHeight));
    this.weight$ = this.store.pipe(select(getWeight));
    this.age$ = this.store.pipe(select(getAge));
    this.gender$ = this.store.pipe(select(getGender));
    this.activityLevel$ = this.store.pipe(select(getActivityLevel));
    this.method$ = this.store.pipe(select(getBmrMethod));
    this.bodyFatPercentage$ = this.store.pipe(select(getBodyFatPercentage));
    this.tdee$ = this.store.pipe(select(getTdee));
    this.tdeeLoseWeight$ = this.store.pipe(select(getTdeeLoseWeight));
    this.tdeeGainWeight$ = this.store.pipe(select(getTdeeGainWeight));
    this.macroPreference$ = this.store.pipe(select(getMacroPreference));
  }

  calculate(tdeeData: TdeeData): void {
    this.store.dispatch(new actions.SetTdeeData(tdeeData));
  }
}
