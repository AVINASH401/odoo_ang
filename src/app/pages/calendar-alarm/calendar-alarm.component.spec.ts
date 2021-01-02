import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAlarmComponent } from './calendar-alarm.component';

describe('CalendarAlarmComponent', () => {
  let component: CalendarAlarmComponent;
  let fixture: ComponentFixture<CalendarAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
