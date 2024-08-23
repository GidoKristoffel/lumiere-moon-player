import { TestBed } from '@angular/core/testing';

import { VideoStorageService } from './video-storage.service';

describe('VideoStorageService', () => {
  let service: VideoStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoStorageService);

    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get video URL', () => {
    const videoUrl = 'http://example.com/video.mp4';

    service.set(videoUrl);

    expect(service.get()).toBe(videoUrl);
    expect(localStorage.getItem('videoUrl')).toBe(videoUrl);
  });
});
