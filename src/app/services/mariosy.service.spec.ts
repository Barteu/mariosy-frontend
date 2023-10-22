import { TestBed } from '@angular/core/testing';
import { MariosyService } from './mariosy.service';

describe('MariosyService', () => {
  let service: MariosyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariosyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
