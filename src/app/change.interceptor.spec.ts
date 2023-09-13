import { TestBed } from '@angular/core/testing';

import { ChangeInterceptor } from './change.interceptor';

describe('ChangeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ChangeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ChangeInterceptor = TestBed.inject(ChangeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
