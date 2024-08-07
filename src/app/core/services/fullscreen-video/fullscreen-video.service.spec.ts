import { TestBed } from '@angular/core/testing';
import { FullscreenVideoService } from './fullscreen-video.service';

export class MockStylesService {
  setByTagName(tagName: string, styleName: string, value: string): void {
    // Mock implementation
  }
}

export const mockAppWindow = {
  setFullscreen: jasmine.createSpy('setFullscreen').and.returnValue(Promise.resolve())
};

describe('FullscreenVideoService', () => {
  let service: FullscreenVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
