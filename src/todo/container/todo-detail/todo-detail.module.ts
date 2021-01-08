import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todo-detail.component';
import { SharedModule } from 'src/core/shared/shared.module';
@NgModule({
  declarations: [TodoDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '/:id', component: TodoDetailComponent
      },
      {
        path: '', component: TodoDetailComponent
      }
    ])
  ]
})
export class TodoDetailModule { }
