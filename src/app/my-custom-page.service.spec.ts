import { TestBed } from '@angular/core/testing';

import { MyCustomPageService } from './my-custom-page.service';

describe('MyCustomPageService', () => {
  let service: MyCustomPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCustomPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});