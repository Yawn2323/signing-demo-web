
import { NgModule } from '@angular/core';
import { SigningDocumentComponent } from './signing-document.component';
import { SigningDocumentRoutingModule } from './signing-document-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../../shared/shared.module';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({

  declarations: [SigningDocumentComponent],

  imports: [
    SigningDocumentRoutingModule,
    PdfViewerModule,
    SharedModule,
    SignaturePadModule
  ]
})
export class SigningDocumentsModule {}
