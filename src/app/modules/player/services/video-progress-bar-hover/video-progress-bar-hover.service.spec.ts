import { TestBed } from '@angular/core/testing';

import { VideoProgressBarHoverService } from './video-progress-bar-hover.service';

describe('VideoProgressBarHoverService', () => {
  let service: VideoProgressBarHoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoProgressBarHoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
