import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRPagesPage } from './qrpages.page';

const routes: Routes = [
  {
    path: '',
    component: QRPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRPagesPageRoutingModule {}
