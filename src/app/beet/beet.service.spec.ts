import { TestBed } from '@angular/core/testing';

import { BeetService } from './beet.service';

describe('BeetService', () => {
  let service: BeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
