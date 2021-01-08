import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './todo-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '', component: ProductHomeComponent
        }
      ]
    )
  ]
})
export class TodoHomeModule { }
