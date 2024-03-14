import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AulasRoutes } from './aulas-routing.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { AulasComponent } from './aulas.component';



@NgModule({
  declarations: [AulasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AulasRoutes),
    SharedMaterialModule
  ]
})
export class AulasModule { }
