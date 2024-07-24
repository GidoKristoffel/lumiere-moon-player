import { TestBed } from '@angular/core/testing';

import { MaximizedWindowStatusService } from './maximized-window-status.service';

describe('MaximizedWindowStatusService', () => {
  let service: MaximizedWindowStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaximizedWindowStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
