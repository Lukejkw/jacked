import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeShellComponent } from './tdee-shell.component';

describe('TdeeShellComponent', () => {
  let component: TdeeShellComponent;
  let fixture: ComponentFixture<TdeeShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeeShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeeShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
