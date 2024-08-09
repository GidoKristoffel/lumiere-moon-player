import { TestBed } from '@angular/core/testing';

import { VideoBufferingViewService } from './video-buffering-view.service';
import { VideoService } from "../../../../core/services/video/video.service";

describe('VideoBufferingViewService', () => {
  let service: VideoBufferingViewService;
  let videoServiceSpy: jasmine.SpyObj<VideoService>;
  let mockVideoElement: HTMLVideoElement;

  beforeEach(() => {
    videoServiceSpy = jasmine.createSpyObj('VideoService', ['getElement', 'onElementReady']);

    TestBed.configureTestingModule({
      providers: [
        VideoBufferingViewService,
        { provide: VideoService, useValue: videoServiceSpy }
      ]
    });

    service = TestBed.inject(VideoBufferingViewService);

    // Mock HTMLVideoElement
    mockVideoElement = document.createElement('video');
    spyOnProperty(service, 'videoElement', 'get').and.returnValue(mockVideoElement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
