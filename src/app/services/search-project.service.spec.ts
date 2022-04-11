import { TestBed } from '@angular/core/testing';

import { SearchProjectService } from './search-project.service';

describe('SearchProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchProjectService = TestBed.get(SearchProjectService);
    expect(service).toBeTruthy();
  });
});
