import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanoEstudoComponent } from './plano-estudo.component';
import { PlanoEsudoRoutes } from './plano-estudo.routing.module';



@NgModule({
  declarations: [
    PlanoEstudoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlanoEsudoRoutes)
  ]
})
export class PlanoEstudoModule { }
