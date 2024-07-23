import { TestBed } from '@angular/core/testing';

import { NoFocusService } from './no-focus.service';

describe('NoFocusService', () => {
  let service: NoFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
