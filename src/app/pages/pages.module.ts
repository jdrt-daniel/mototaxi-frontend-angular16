import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { AddComponent } from './tarjetas/add/add.component';
import { EditComponent } from './tarjetas/edit/edit.component';
import { AlertComponent } from './tarjetas/alert/alert.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PublicComponent } from './tarjetas/public/public.component';
import { QrCodeModule } from 'ng-qrcode';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    PagesComponent,
    TarjetasComponent,
    AddComponent,
    EditComponent,
    AlertComponent,
    PublicComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    QrCodeModule,
    NgxPrintModule,
  ],
  exports: [],
})
export class PagesModule {}
