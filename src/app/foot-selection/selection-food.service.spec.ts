import { TestBed } from '@angular/core/testing';

import { SelectionFoodService } from './selection-food.service';

describe('SelectionFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionFoodService = TestBed.get(SelectionFoodService);
    expect(service).toBeTruthy();
  });
});
