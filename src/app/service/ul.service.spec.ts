import { TestBed } from '@angular/core/testing';

import { UlService } from './ul.service';

describe('UlService', () => {
  let service: UlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
