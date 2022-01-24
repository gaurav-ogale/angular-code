import { TestBed } from '@angular/core/testing';

import { VaccineAccessguardService } from './vaccine-accessguard.service';

describe('VaccineAccessguardService', () => {
  let service: VaccineAccessguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineAccessguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
