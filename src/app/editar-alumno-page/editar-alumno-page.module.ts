import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAlumnoPagePageRoutingModule } from './editar-alumno-page-routing.module';

import { EditarAlumnoPage } from './editar-alumno-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAlumnoPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarAlumnoPage]
})
export class EditarAlumnoPageModule {}
