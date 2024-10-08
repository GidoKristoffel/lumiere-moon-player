import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';
import { MaximizedWindowStatusService } from "../maximized-window-status/maximized-window-status.service";
import { appWindow } from "@tauri-apps/api/window";

// Заглушаем методы appWindow
jest.mock('@tauri-apps/api/window', () => ({
  appWindow: {
    minimize: jest.fn().mockResolvedValue(undefined),
    isMaximized: jest.fn().mockResolvedValue(false),
    maximize: jest.fn().mockResolvedValue(undefined),
    unmaximize: jest.fn().mockResolvedValue(undefined),
    close: jest.fn().mockResolvedValue(undefined),
    startDragging: jest.fn().mockResolvedValue(undefined),
  }
}));

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should minimize the window', () => {
    service.minimize();
    expect(appWindow.minimize).toHaveBeenCalled();
  });

  it('should toggle maximize window (maximize if not maximized)', async () => {
    // Заглушаем возвращаемое значение isMaximized
    (appWindow.isMaximized as jest.Mock).mockResolvedValueOnce(false);

    await service.toggleMaximize();

    expect(appWindow.isMaximized).toHaveBeenCalled();
    expect(appWindow.maximize).toHaveBeenCalled();
    expect(maximizedWindowStatusService.set).toHaveBeenCalledWith(true);
  });

  it('should set maximize to true', async () => {
    await service.setMaximize(true);

    expect(appWindow.maximize).toHaveBeenCalled();
    expect(maximizedWindowStatusService.set).toHaveBeenCalledWith(true);
  });

  it('should set maximize to false', async () => {
    await service.setMaximize(false);

    expect(appWindow.unmaximize).toHaveBeenCalled();
    expect(maximizedWindowStatusService.set).toHaveBeenCalledWith(false);
  });

  it('should close the window', () => {
    service.close();
    expect(appWindow.close).toHaveBeenCalled();
  });

  it('should start dragging the window', () => {
    service.startDragging();
    expect(appWindow.startDragging).toHaveBeenCalled();
  });
});
