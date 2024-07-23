import { TestBed } from '@angular/core/testing';

import { FullscreenVideoStatusService } from './fullscreen-video-status.service';

describe('FullscreenVideoStatusService', () => {
  let service: FullscreenVideoStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenVideoStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
