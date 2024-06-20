import { TestBed } from '@angular/core/testing';

import { VideoSelectionService } from './video-selection.service';

describe('VideoSelectionService', () => {
  let service: VideoSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
