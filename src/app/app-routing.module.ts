import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ShowComponent } from './pages/show/show.component';
import { MapaPageComponent } from './pages/mapa-page/mapa-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'registrar-sensor',
        component: RegistrarComponent
      },
      {
        path: 'show-sensor/:id',
        component: ShowComponent
      },
      {
        path: 'mapa',
        component: MapaPageComponent
      },
      {
        path: 'test',
        component: TestPageComponent
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
