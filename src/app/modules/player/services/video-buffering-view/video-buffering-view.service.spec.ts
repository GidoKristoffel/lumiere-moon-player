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

  it('should initialize the service', () => {
    expect(service).toBeTruthy();
  });

  it('should return the buffered signal as readonly', () => {
    const bufferedSignal = service.watch();
    expect(bufferedSignal()).toBe(0);
  });

  it('should update the buffered signal based on videoElement state', () => {
    mockVideoElement.duration = 100;

    // Mock buffered ranges
    const mockBuffered = {
      length: 1,
      end: (index: number) => 50
    } as unknown as TimeRanges;

    spyOnProperty(mockVideoElement, 'buffered', 'get').and.returnValue(mockBuffered);

    service.update();

    const bufferedSignal = service.watch();
    expect(bufferedSignal()).toBe(50);
  });

  it('should not update the buffered signal if videoElement is undefined', () => {
    spyOnProperty(service, 'videoElement', 'get').and.returnValue(undefined);

    service.update();

    const bufferedSignal = service.watch();
    expect(bufferedSignal()).toBe(0);
  });

  it('should not update the buffered signal if buffered length is 0', () => {
    spyOnProperty(mockVideoElement, 'buffered', 'get').and.returnValue({
      length: 0,
      end: () => 0
    } as unknown as TimeRanges);

    service.update();

    const bufferedSignal = service.watch();
    expect(bufferedSignal()).toBe(0);
  });
});
