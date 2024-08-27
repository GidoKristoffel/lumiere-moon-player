import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';
import { MaximizedWindowStatusService } from "../maximized-window-status/maximized-window-status.service";

describe('WindowService', () => {
  let service: WindowService;
  let maximizedWindowStatusService: MaximizedWindowStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaximizedWindowStatusService]
    });
    service = TestBed.inject(WindowService);
    maximizedWindowStatusService = TestBed.inject(MaximizedWindowStatusService);

    // Заглушаем метод set в MaximizedWindowStatusService
    jest.spyOn(maximizedWindowStatusService, 'set').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
