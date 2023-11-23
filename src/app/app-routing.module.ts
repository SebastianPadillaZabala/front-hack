import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'inicio',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'inicio',
  //   component: InicioComponent
  // },

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
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
