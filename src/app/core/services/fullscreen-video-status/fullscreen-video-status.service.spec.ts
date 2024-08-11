import { TestBed } from '@angular/core/testing';

import { FullscreenVideoStatusService } from './fullscreen-video-status.service';
import { LocalStorageService } from "../local-storage/local-storage.service";
import { FullscreenVideoService } from "../fullscreen-video/fullscreen-video.service";

describe('FullscreenVideoStatusService', () => {
  let service: FullscreenVideoStatusService;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let fullscreenVideoService: jasmine.SpyObj<FullscreenVideoService>;

  beforeEach(() => {
    const localStorageSpy = jasmine.createSpyObj('LocalStorageService', ['get', 'set']);
    const fullscreenSpy = jasmine.createSpyObj('FullscreenVideoService', ['on', 'off']);

    TestBed.configureTestingModule({
      providers: [
        FullscreenVideoStatusService,
        { provide: LocalStorageService, useValue: localStorageSpy },
        { provide: FullscreenVideoService, useValue: fullscreenSpy }
      ]
    });

    service = TestBed.inject(FullscreenVideoStatusService);
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    fullscreenVideoService = TestBed.inject(FullscreenVideoService) as jasmine.SpyObj<FullscreenVideoService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with status from localStorage', () => {
    localStorageService.get.and.returnValue(true);
    service.init();
    expect(service.watch()()).toBeTrue();
    expect(localStorageService.get).toHaveBeenCalledWith('fullscreen');
    expect(fullscreenVideoService.on).toHaveBeenCalled();
  });

  it('should set status and store it in localStorage', () => {
    service.set(true);
    expect(service.watch()()).toBeTrue();
    expect(localStorageService.set).toHaveBeenCalledWith('fullscreen', true);
    expect(fullscreenVideoService.on).toHaveBeenCalled();

    service.set(false);
    expect(service.watch()()).toBeFalse();
    expect(localStorageService.set).toHaveBeenCalledWith('fullscreen', false);
    expect(fullscreenVideoService.off).toHaveBeenCalled();
  });

  it('should toggle status', () => {
    service.set(false);
    service.toggle();
    expect(service.watch()()).toBeTrue();
    expect(localStorageService.set).toHaveBeenCalledWith('fullscreen', true);
    expect(fullscreenVideoService.on).toHaveBeenCalled();

    service.toggle();
    expect(service.watch()()).toBeFalse();
    expect(localStorageService.set).toHaveBeenCalledWith('fullscreen', false);
    expect(fullscreenVideoService.off).toHaveBeenCalled();
  });

  it('should call renderFullscreen on init and set', () => {
    service.set(true);
    expect(fullscreenVideoService.on).toHaveBeenCalled();
    expect(fullscreenVideoService.off).not.toHaveBeenCalled();

    service.set(false);
    expect(fullscreenVideoService.off).toHaveBeenCalled();
  });
});
