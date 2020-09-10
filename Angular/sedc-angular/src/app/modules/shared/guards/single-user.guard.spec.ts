import { TestBed, async, inject } from '@angular/core/testing';

import { SingleUserGuard } from './single-user.guard';

describe('SingleUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleUserGuard]
    });
  });

  it('should ...', inject([SingleUserGuard], (guard: SingleUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
