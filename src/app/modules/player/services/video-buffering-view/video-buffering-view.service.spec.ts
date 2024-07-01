import { TestBed } from '@angular/core/testing';

import { VideoBufferingViewService } from './video-buffering-view.service';

describe('VideoBufferingViewService', () => {
  let service: VideoBufferingViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoBufferingViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
