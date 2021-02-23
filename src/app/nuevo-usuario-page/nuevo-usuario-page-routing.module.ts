import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioPagePage } from './nuevo-usuario-page.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoUsuarioPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoUsuarioPagePageRoutingModule {}
