import { TestBed } from '@angular/core/testing';

import { VideoProgressBarService } from './video-progress-bar.service';

describe('VideoProgressBarService', () => {
  let service: VideoProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
