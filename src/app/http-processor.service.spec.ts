import { TestBed } from '@angular/core/testing';

import { HttpProcessorService } from './http-processor.service';

describe('HttpProcessorService', () => {
  let service: HttpProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
