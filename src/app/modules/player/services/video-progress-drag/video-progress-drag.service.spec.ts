import { TestBed } from '@angular/core/testing';

import { VideoProgressDragService } from './video-progress-drag.service';

describe('VideoProgressDragService', () => {
  let service: VideoProgressDragService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoProgressDragService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
