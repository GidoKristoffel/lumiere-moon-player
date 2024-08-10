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
});
