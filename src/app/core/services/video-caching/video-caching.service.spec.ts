import { TestBed } from '@angular/core/testing';

import { VideoCachingService } from './video-caching.service';
import { VideoService } from "../video/video.service";

describe('VideoCachingService', () => {
  let service: VideoCachingService;
  let videoServiceSpy: jasmine.SpyObj<VideoService>;

  beforeEach(() => {
    const videoServiceSpyObj = jasmine.createSpyObj('VideoService', ['set']);

    TestBed.configureTestingModule({
      providers: [
        VideoCachingService,
        { provide: VideoService, useValue: videoServiceSpyObj }
      ]
    });

    service = TestBed.inject(VideoCachingService);
    videoServiceSpy = TestBed.inject(VideoService) as jasmine.SpyObj<VideoService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with video URL from localStorage', () => {
    const mockVideoUrl = 'http://example.com/video.mp4';
    spyOn(localStorage, 'getItem').and.returnValue(mockVideoUrl);

    service.init();

    expect(localStorage.getItem).toHaveBeenCalledWith('videoUrl');
    expect(videoServiceSpy.set).toHaveBeenCalledWith(mockVideoUrl);
  });

  it('should set video URL in localStorage', () => {
    const mockVideoUrl = 'http://example.com/new-video.mp4';
    spyOn(localStorage, 'setItem');

    service.run(mockVideoUrl);

    expect(localStorage.setItem).toHaveBeenCalledWith('videoUrl', mockVideoUrl);
  });
});
