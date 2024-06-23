import { TestBed } from '@angular/core/testing';

import { VideoCachingService } from './video-caching.service';

describe('VideoCachingService', () => {
  let service: VideoCachingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCachingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
