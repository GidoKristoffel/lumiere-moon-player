import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayComponent } from './time-display.component';
import { DatePipe } from "@angular/common";

describe('TimeDisplayComponent', () => {
  let component: TimeDisplayComponent;
  let fixture: ComponentFixture<TimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeDisplayComponent, DatePipe],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
