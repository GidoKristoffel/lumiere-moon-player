import { TestBed } from '@angular/core/testing';

import { VideoProgressDragStatusService } from './video-progress-drag-status.service';

describe('VideoProgressDragStatusService', () => {
  let service: VideoProgressDragStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoProgressDragStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
