import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DojoCrudPageComponent } from './pages/dojo-crud-page/dojo-crud-page.component';
import { DojoGitflowPageComponent } from './pages/dojo-gitflow-page/dojo-gitflow-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'dojo-crud',
    component: DojoCrudPageComponent
  },
  {
    path: 'dojo-gitflow',
    component: DojoGitflowPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
