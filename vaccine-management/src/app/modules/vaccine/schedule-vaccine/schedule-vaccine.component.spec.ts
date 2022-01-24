import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleVaccineComponent } from './schedule-vaccine.component';

describe('ScheduleVaccineComponent', () => {
  let component: ScheduleVaccineComponent;
  let fixture: ComponentFixture<ScheduleVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
