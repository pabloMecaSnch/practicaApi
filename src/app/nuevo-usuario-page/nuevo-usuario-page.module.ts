import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoUsuarioPagePageRoutingModule } from './nuevo-usuario-page-routing.module';

import { NuevoUsuarioPagePage } from './nuevo-usuario-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoUsuarioPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevoUsuarioPagePage]
})
export class NuevoUsuarioPagePageModule {}
