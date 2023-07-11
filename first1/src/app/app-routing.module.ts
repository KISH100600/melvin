import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './comp/first/first.component';
import { SecComponent } from './comp/sec/sec.component';
import { ThirdComponent } from './comp/third/third.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'third',
        component: ThirdComponent,
      },
    ],
  },

  {
    path: 'second/:ids',
    component: SecComponent,
  },

  {
    path: '',
    redirectTo: '/first',
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
