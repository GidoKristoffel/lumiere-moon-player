import { TestBed } from '@angular/core/testing';

import { VideoTimeTooltipPositionService } from './video-time-tooltip-position.service';

describe('VideoTimeTooltipPositionService', () => {
  let service: VideoTimeTooltipPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeTooltipPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
