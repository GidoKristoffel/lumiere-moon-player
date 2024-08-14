import { TestBed } from '@angular/core/testing';

import { MaximizedWindowStatusService } from './maximized-window-status.service';
import { appWindow } from "@tauri-apps/api/window";

describe('MaximizedWindowStatusService', () => {
  let service: MaximizedWindowStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaximizedWindowStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize status correctly', async () => {
    // Mock appWindow.isMaximized() to return true
    spyOn(appWindow, 'isMaximized').and.returnValue(Promise.resolve(true));

    await service.init();

    expect(service.watch()()).toBeTrue();
  });

  it('should return initial status as false', () => {
    expect(service.watch()()).toBeFalse();
  });

  it('should set status correctly', () => {
    service.set(true);
    expect(service.watch()()).toBeTrue();

    service.set(false);
    expect(service.watch()()).toBeFalse();
  });

  it('should update status correctly', async () => {
    // Mock appWindow.isMaximized() to return false
    spyOn(appWindow, 'isMaximized').and.returnValue(Promise.resolve(false));

    await service.update();

    expect(service.watch()()).toBeFalse();

    // Mock appWindow.isMaximized() to return true
    spyOn(appWindow, 'isMaximized').and.returnValue(Promise.resolve(true));

    await service.update();

    expect(service.watch()()).toBeTrue();
  });
});
