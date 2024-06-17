import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { videoAvailableGuard } from './video-available.guard';

describe('videoAvailableGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => videoAvailableGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
