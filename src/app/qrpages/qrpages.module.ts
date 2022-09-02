import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRPagesPageRoutingModule } from './qrpages-routing.module';

import { QRPagesPage } from './qrpages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRPagesPageRoutingModule
  ],
  declarations: [QRPagesPage]
})
export class QRPagesPageModule {}
