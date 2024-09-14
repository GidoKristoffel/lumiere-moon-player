import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTooltipComponent } from './time-tooltip.component';
import {
  VideoTimeTooltipDisplayService
} from "../../services/video-time-tooltip-display/video-time-tooltip-display.service";
import { VideoTimeTooltipViewService } from "../../services/video-time-tooltip-view/video-time-tooltip-view.service";
import {
  VideoTimeTooltipPositionService
} from "../../services/video-time-tooltip-position/video-time-tooltip-position.service";
import {
  VideoTimeTooltipElementService
} from "../../services/video-time-tooltip-element/video-time-tooltip-element.service";

describe('TimeTooltipComponent', () => {
  let component: TimeTooltipComponent;
  let fixture: ComponentFixture<TimeTooltipComponent>;
  let videoTimeTooltipDisplayService: jasmine.SpyObj<VideoTimeTooltipDisplayService>;
  let videoTimeTooltipViewService: jasmine.SpyObj<VideoTimeTooltipViewService>;
  let videoTimeTooltipPositionService: jasmine.SpyObj<VideoTimeTooltipPositionService>;
  let videoTimeTooltipElementService: jasmine.SpyObj<VideoTimeTooltipElementService>;

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
