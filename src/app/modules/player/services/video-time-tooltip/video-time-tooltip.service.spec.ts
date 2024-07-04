import { TestBed } from '@angular/core/testing';

import { VideoTimeTooltipService } from './video-time-tooltip.service';

describe('VideoTimeTooltipService', () => {
  let service: VideoTimeTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
