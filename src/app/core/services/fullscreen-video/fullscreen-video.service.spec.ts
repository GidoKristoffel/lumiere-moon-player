import { TestBed } from '@angular/core/testing';

import { FullscreenVideoService } from './fullscreen-video.service';

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
