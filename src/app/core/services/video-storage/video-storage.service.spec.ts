import { TestBed } from '@angular/core/testing';

import { VideoStorageService } from './video-storage.service';

describe('VideoStorageService', () => {
  let service: VideoStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoStorageService);

    localStorage.clear();
  });
});
