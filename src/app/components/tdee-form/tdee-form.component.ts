import { Component, Output, EventEmitter, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TdeeData } from 'src/app/models/tdee-data';
import { Gender } from 'src/app/models/gender.enum';
import { ActivityLevel, ActivityLevelOptions } from 'src/app/models/activity-level.enum';
import { BmrMethod } from 'src/app/models/bmr-method.enum';
import { values, keys } from 'ramda';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MacroBreakdown, Breakdown, createBreakdown } from 'src/app/models/macro-breakdown.enum';

@Component({
  selector: 'tdee-form',
  templateUrl: './tdee-form.component.html',
  styleUrls: ['./tdee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TdeeFormComponent implements OnInit {
  @Input()
  age: number;
  @Input()
  height: number;
  @Input()
  weight: number;
  @Input()
  bodyFatPercentage: number;
  @Input()
  tdee: number;
  @Input()
  tdeeLoseWeight: number;
  @Input()
  tdeeGainWeight: number;
  @Input()
  gender: Gender;
  @Input()
  activityLevel: ActivityLevel;
  @Input()
  method: BmrMethod;
  @Input()
  set macroPreference(preference) {
    this._currentMacroBreakdown = createBreakdown(preference);
    this._macroPreference = preference;
  }

  defaultBmrMethod = BmrMethod.LeanBodyMass;

  _currentMacroBreakdown: Breakdown;
  _macroPreference: MacroBreakdown;

  methods = values(BmrMethod);
  marcoBreakdowns = values(MacroBreakdown);
  activityLevelOptions = ActivityLevelOptions;

  @Output() calculateClicked = new EventEmitter<TdeeData>();

  basicInfoGroup: FormGroup;
  activityAndPreferenceGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.basicInfoGroup = this._formBuilder.group({
      method: [this.method, Validators.required],
      age: [this.age, Validators.required],
      height: [this.height, Validators.required],
      weight: [this.weight, Validators.required],
      bodyFatPercentage: [this.bodyFatPercentage, Validators.required]
    });
    this.activityAndPreferenceGroup = this._formBuilder.group({
      activityLevel: [this.activityLevel, Validators.required],
      macroPreference: [this._macroPreference, Validators.required],
    });
  }

  calculate() {
    this.calculateClicked.emit({
      ...this.basicInfoGroup.value,
      ...this.activityAndPreferenceGroup.value,
    });
  }
}
