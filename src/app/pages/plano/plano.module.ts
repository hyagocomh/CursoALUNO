import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanoRoutes } from './plano-routing.module';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(PlanoRoutes)
    ]
  })
  export class PlanoModule { }