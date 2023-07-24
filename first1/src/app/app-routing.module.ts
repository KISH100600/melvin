import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './comp/first/first.component';
import { SecComponent } from './comp/sec/sec.component';
import { ThirdComponent } from './comp/third/third.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [],
  },

  {
    path: 'second/:ids',
    component: SecComponent,
  },
  {
    path: 'third',
    component: ThirdComponent,
  },
  {
    path: '',
    redirectTo: '/third',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ThirdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
