import { TestBed } from '@angular/core/testing';

import { VideoPlayingStatusService } from './video-playing-status.service';

describe('VideoPlayingStatusService', () => {
  let service: VideoPlayingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
