import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetgroupRoutingModule } from './metgroup-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlesIndexComponent } from './articles-index/articles-index.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    ArticlesIndexComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MetgroupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MetgroupModule { }






