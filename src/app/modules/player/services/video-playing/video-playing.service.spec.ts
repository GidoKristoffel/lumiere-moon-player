import { TestBed } from '@angular/core/testing';

import { VideoPlayingService } from './video-playing.service';

describe('VideoPlayingService', () => {
  let service: VideoPlayingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
