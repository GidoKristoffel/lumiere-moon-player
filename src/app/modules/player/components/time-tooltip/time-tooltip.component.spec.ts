import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTooltipComponent } from './time-tooltip.component';

describe('TimeTooltipComponent', () => {
  let component: TimeTooltipComponent;
  let fixture: ComponentFixture<TimeTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
