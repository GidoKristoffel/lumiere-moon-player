import { TestBed } from '@angular/core/testing';

import { VideoPlayService } from './video-play.service';

describe('VideoPlayService', () => {
  let service: VideoPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
