import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ArticlesIndexComponent } from './articles-index/articles-index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'metgroup/login', pathMatch: 'full' },
  { path: 'metgroup', redirectTo: 'metgroup/index', pathMatch: 'full' },
  { path: 'metgroup/index', component: IndexComponent },
  { path: 'metgroup/:metgroupId/view', component: ViewComponent },
  { path: 'metgroup/create', component: CreateComponent },
  { path: 'metgroup/:metgroupId/edit', component: EditComponent },
  { path: 'metgroup/articles', component: ArticlesIndexComponent },
  { path: 'metgroup/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetgroupRoutingModule { }
