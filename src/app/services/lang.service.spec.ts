import { TestBed } from '@angular/core/testing';

import { LangService } from './lang.service';

describe('LangServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangService = TestBed.get(LangService);
    expect(service).toBeTruthy();
  });
});
