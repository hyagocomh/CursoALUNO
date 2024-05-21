import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { AreaDoAlunoComponent } from './area-do-aluno.component';
import { AreaDoAlunoRoutes } from './area-do-aluno-routing.module';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    AreaDoAlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AreaDoAlunoRoutes),
    SharedMaterialModule,
    FormsModule
  ]
})
export class AreaDoAlunoModule { }
