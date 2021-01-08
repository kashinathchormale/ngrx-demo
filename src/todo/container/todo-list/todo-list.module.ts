import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/core/shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ListComponent
      }
    ])
  ]
})
export class TodoListModule { }
