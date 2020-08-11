
import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningDocumentComponent } from './signing-document.component';


const routes:Routes = [
  {
      path:'',
      component:SigningDocumentComponent
  }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SigningDocumentRoutingModule {}
