import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { RouterModule } from '@angular/router';


const components = [
    LayoutsComponent,


]



@NgModule({
  declarations: [ components ],
  exports: [ components ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
