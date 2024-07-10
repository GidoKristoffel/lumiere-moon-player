import { TestBed } from '@angular/core/testing';

import { VideoTimeTooltipElementService } from './video-time-tooltip-element.service';

describe('VideoTimeTooltipElementService', () => {
  let service: VideoTimeTooltipElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoTimeTooltipElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
