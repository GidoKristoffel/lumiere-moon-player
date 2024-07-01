import { TestBed } from '@angular/core/testing';

import { VideoProgressViewService } from './video-progress-view.service';

describe('VideoProgressViewService', () => {
  let service: VideoProgressViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoProgressViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
