import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const MODULES = [
  CommonModule,
];

@NgModule({
  imports: [MODULES,],
  exports: [MODULES],
  declarations: [
  ],
  entryComponents: []
})
export class SharedModule {}
