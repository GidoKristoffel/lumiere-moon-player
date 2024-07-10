import { TestBed } from '@angular/core/testing';

import { VideoTimeTooltipDisplayService } from './video-time-tooltip-display.service';

describe('VideoTimeTooltipDisplayService', () => {
  let service: VideoTimeTooltipDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeTooltipDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
