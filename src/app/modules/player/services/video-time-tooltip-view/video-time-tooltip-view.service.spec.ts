import { TestBed } from '@angular/core/testing';

import { VideoTimeTooltipViewService } from './video-time-tooltip-view.service';

describe('VideoTimeTooltipViewService', () => {
  let service: VideoTimeTooltipViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeTooltipViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
