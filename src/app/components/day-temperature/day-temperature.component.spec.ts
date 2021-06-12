import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTemperatureComponent } from './day-temperature.component';

describe('DayTemperatureComponent', () => {
  let component: DayTemperatureComponent;
  let fixture: ComponentFixture<DayTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTemperatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
