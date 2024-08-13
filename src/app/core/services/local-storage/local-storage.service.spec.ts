import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);

    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store an item in localStorage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    service.set(key, value);

    const storedItem = localStorage.getItem(key);
    expect(storedItem).toEqual(JSON.stringify(value));
  });

  it('should retrieve an item from localStorage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    localStorage.setItem(key, JSON.stringify(value));

    const result = service.get(key);
    expect(result).toEqual(value);
  });

  it('should return null for non-existent key', () => {
    const result = service.get('nonExistentKey');
    expect(result).toBeNull();
  });

  it('should remove an item from localStorage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    localStorage.setItem(key, JSON.stringify(value));
    service.remove(key);

    const result = localStorage.getItem(key);
    expect(result).toBeNull();
  });
});
