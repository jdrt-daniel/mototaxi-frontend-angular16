import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { AddComponent } from './tarjetas/add/add.component';
import { EditComponent } from './tarjetas/edit/edit.component';
import { PublicComponent } from './tarjetas/public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'tarjeta',
        component: TarjetasComponent,
      },
      {
        path: 'tarjeta/add',
        component: AddComponent,
      },
      {
        path: 'tarjeta/edit',
        component: EditComponent,
      },
      {
        path: 'conductor/:id',
        component: PublicComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
