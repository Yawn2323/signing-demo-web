import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningDocumentComponent } from './signing-document.component';

describe('SigningDocumentComponent', () => {
  let component: SigningDocumentComponent;
  let fixture: ComponentFixture<SigningDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigningDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
