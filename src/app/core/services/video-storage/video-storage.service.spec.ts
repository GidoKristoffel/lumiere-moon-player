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

  it('should return null if video URL is not set', () => {
    expect(service.get()).toBeNull();
  });

  it('should return true when video URL is set', () => {
    service.set('http://example.com/video.mp4');

    expect(service.isAvailable()).toBeTrue();
  });

  it('should return false when video URL is not set', () => {
    expect(service.isAvailable()).toBeFalse();
  });

  it('should load video URL from localStorage on initialization', () => {
    const videoUrl = 'http://example.com/video.mp4';
    localStorage.setItem('videoUrl', videoUrl);

    const newService = TestBed.inject(VideoStorageService);

    expect(newService.get()).toBe(videoUrl);
  });
});
