import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/shared-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponentsModule
  ]
})
export class SharedModule { }
