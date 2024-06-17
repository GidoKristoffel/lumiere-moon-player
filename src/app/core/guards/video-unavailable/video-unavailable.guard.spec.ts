import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { videoUnavailableGuard } from './video-unavailable.guard';

describe('videoUnavailableGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => videoUnavailableGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
