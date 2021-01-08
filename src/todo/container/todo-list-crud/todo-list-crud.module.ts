import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/core/shared/shared.module';
@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '/:id', component: CrudComponent
      },
      {
        path: '', component: CrudComponent
      }
    ])
  ]
})
export class TodoListCrudModule { }
