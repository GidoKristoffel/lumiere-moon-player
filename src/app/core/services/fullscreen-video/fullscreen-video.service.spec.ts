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

jest.mock('@tauri-apps/api/window', () => ({
  appWindow: mockAppWindow
}));

describe('FullscreenVideoService', () => {
  let service: FullscreenVideoService;
  let stylesService: MockStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FullscreenVideoService,
        { provide: StylesService, useClass: MockStylesService }
      ]
    });

    service = TestBed.inject(FullscreenVideoService);
    stylesService = TestBed.inject(StylesService) as unknown as MockStylesService;
  });

  it('should call correct methods when on() is called', () => {
    spyOn(stylesService, 'setByTagName').and.callThrough();

    service.on();

    expect(stylesService.setByTagName).toHaveBeenCalledWith('body', 'border-width', '0');
    expect(stylesService.setByTagName).toHaveBeenCalledWith('lmp-title-bar', 'display', 'none');
    expect(mockAppWindow.setFullscreen).toHaveBeenCalledWith(true);
  });

  it('should call correct methods when off() is called', () => {
    spyOn(stylesService, 'setByTagName').and.callThrough();

    service.off();

    expect(stylesService.setByTagName).toHaveBeenCalledWith('body', 'border-width', '4px');
    expect(stylesService.setByTagName).toHaveBeenCalledWith('lmp-title-bar', 'display', 'block');
    expect(mockAppWindow.setFullscreen).toHaveBeenCalledWith(false);
  });
});