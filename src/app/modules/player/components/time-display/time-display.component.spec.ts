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

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct default values for currentTime and totalTime', () => {
    expect(component.currentTime).toBe(0);
    expect(component.totalTime).toBe(0);
  });

  it('should correctly set @Input values for currentTime and totalTime', () => {
    component.currentTime = 50;
    component.totalTime = 300;
    fixture.detectChanges();

    expect(component.currentTime).toBe(50);
    expect(component.totalTime).toBe(300);
  });

  it('should correctly render time values in the template', () => {
    component.currentTime = 120;
    component.totalTime = 300;
    fixture.detectChanges();
  });
});
