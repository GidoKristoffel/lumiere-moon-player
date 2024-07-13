import { TestBed } from '@angular/core/testing';

import { FullscreenWindowService } from './fullscreen-window.service';

describe('FullscreenWindowService', () => {
  let service: FullscreenWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
