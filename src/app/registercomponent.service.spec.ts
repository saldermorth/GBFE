import { TestBed } from '@angular/core/testing';

import { RegistercomponentService } from './registercomponent.service';

describe('RegistercomponentService', () => {
  let service: RegistercomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
