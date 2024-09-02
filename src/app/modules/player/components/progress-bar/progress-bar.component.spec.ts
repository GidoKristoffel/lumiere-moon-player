import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { VideoBufferingViewService } from "../../services/video-buffering-view/video-buffering-view.service";
import { VideoProgressViewService } from "../../services/video-progress-view/video-progress-view.service";
import { VideoProgressDragService } from "../../services/video-progress-drag/video-progress-drag.service";
import { VideoProgressBarHoverService } from "../../services/video-progress-bar-hover/video-progress-bar-hover.service";
import { VideoTimeTooltipService } from "../../services/video-time-tooltip/video-time-tooltip.service";
import {
  VideoTimeTooltipDisplayService
} from "../../services/video-time-tooltip-display/video-time-tooltip-display.service";

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  let mockVideoBufferingViewService: jasmine.SpyObj<VideoBufferingViewService>;
  let mockVideoProgressViewService: jasmine.SpyObj<VideoProgressViewService>;
  let mockVideoProgressDragService: jasmine.SpyObj<VideoProgressDragService>;
  let mockVideoProgressBarHoverService: jasmine.SpyObj<VideoProgressBarHoverService>;
  let mockVideoTimeTooltipService: jasmine.SpyObj<VideoTimeTooltipService>;
  let mockVideoTimeTooltipDisplayService: jasmine.SpyObj<VideoTimeTooltipDisplayService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
