import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectAncestorComponent } from './subject/subject-ancestor/subject-ancestor.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: 'direct',
    component: ParentComponent
  },
  {
    path: 'subject',
    component: SubjectAncestorComponent
  },
  {
    path: '**',
    redirectTo: '/direct',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
