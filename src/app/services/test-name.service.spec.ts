import { TestBed } from '@angular/core/testing';

import { TestNameService } from './test-name.service';

describe('TestNameService', () => {
  let service: TestNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
