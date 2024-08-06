import { WatchVideoElementReady } from './watch-video-element-ready';
import { of } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { VideoService } from "../../../../core/services/video/video.service";

export class MockVideoService {
  onElementReady = of(null);

  getElement(): HTMLVideoElement {
    return document.createElement('video');
  }
}

describe('WatchVideoElementReady', () => {
  let watchVideoElementReady: WatchVideoElementReady;
  let videoService: MockVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: VideoService, useClass: MockVideoService }
      ]
    });

    videoService = TestBed.inject(VideoService) as unknown as MockVideoService;

    // Создание тестового экземпляра абстрактного класса
    class TestWatchVideoElementReady extends WatchVideoElementReady {
      constructor(protected override videoService: VideoService) {
        super(videoService);
      }
    }

    watchVideoElementReady = new TestWatchVideoElementReady(videoService);
  });

  it('should set videoElement when onElementReady emits', () => {
    expect(watchVideoElementReady.videoElement).toBeDefined();
    expect(watchVideoElementReady.videoElement instanceof HTMLVideoElement).toBe(true);
  });
});