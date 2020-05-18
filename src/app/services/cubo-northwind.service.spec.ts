import { TestBed } from '@angular/core/testing';

import { CuboNorthwindService } from './cubo-northwind.service';

describe('CuboNorthwindService', () => {
  let service: CuboNorthwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuboNorthwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
