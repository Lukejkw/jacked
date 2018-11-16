import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeFormComponent } from './tdee-form.component';

describe('TdeeFormComponent', () => {
  let component: TdeeFormComponent;
  let fixture: ComponentFixture<TdeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
