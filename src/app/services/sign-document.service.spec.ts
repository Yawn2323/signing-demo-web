import { TestBed } from '@angular/core/testing';

import { SignDocumentService } from './sign-document.service';

describe('SignDocumentService', () => {
  let service: SignDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
