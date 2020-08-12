
import { NgModule } from '@angular/core';
import { SigningDocumentComponent } from './signing-document.component';
import { SigningDocumentRoutingModule } from './signing-document-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../../shared/shared.module';

@NgModule({

  declarations: [SigningDocumentComponent],

  imports: [
    SigningDocumentRoutingModule,
    PdfViewerModule,
    SharedModule
  ]
})
export class SigningDocumentsModule {}
