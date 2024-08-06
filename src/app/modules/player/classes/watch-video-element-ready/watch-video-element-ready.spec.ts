import { WatchVideoElementReady } from './watch-video-element-ready';
import { of } from "rxjs";

export class MockVideoService {
  onElementReady = of(null);

  getElement(): HTMLVideoElement {
    const videoElement = document.createElement('video');
    return videoElement;
  }
}

describe('WatchVideoElementReady', () => {
  it('should create an instance', () => {
    expect(new WatchVideoElementReady()).toBeTruthy();
  });
});
