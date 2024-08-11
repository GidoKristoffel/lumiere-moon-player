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

});
