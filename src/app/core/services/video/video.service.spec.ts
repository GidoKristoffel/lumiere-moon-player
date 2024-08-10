import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService]
    });
    service = TestBed.inject(VideoService);

    // Очищаем localStorage перед каждым тестом
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with null URL if no videoUrl in localStorage', () => {
    expect(service.getUrl()).toBeNull();
  });

  it('should retrieve URL from localStorage if set', () => {
    localStorage.setItem('videoUrl', 'http://example.com/video.mp4');
    const newService = TestBed.inject(VideoService); // создаем новый экземпляр сервиса
    expect(newService.getUrl()).toBe('http://example.com/video.mp4');
  });

  it('should set and get URL', () => {
    const url = 'http://example.com/video.mp4';
    service.setUrl(url);
    expect(service.getUrl()).toBe(url);
    expect(localStorage.getItem('videoUrl')).toBe(url);
  });

  it('should clear URL when set to null', () => {
    service.setUrl('http://example.com/video.mp4');
    service.setUrl(null);
    expect(service.getUrl()).toBeNull();
    expect(localStorage.getItem('videoUrl')).toBeNull();
  });

  it('should set and get video element', () => {
    const videoElement = document.createElement('video');
    service.setElement(videoElement);
    expect(service.getElement()).toBe(videoElement);
  });

  it('should emit elementReadySubject when video element is set', (done) => {
    service.onElementReady.subscribe(() => {
      done();
    });
    const videoElement = document.createElement('video');
    service.setElement(videoElement);
  });

  it('should return true for isAvailable if URL is set', () => {
    service.setUrl('http://example.com/video.mp4');
    expect(service.isAvailable()).toBeTrue();
  });

  it('should return false for isAvailable if URL is not set', () => {
    service.setUrl(null);
    expect(service.isAvailable()).toBeFalse();
  });
});
