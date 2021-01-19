import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './todo.component';

import { StoreModule } from '@ngrx/store';
import { ApiServiceService } from './services/api-service.service';

import { storeName, reducers, effects } from './storev7';
import { EffectsModule } from '@ngrx/effects';

import * as fromGuards from './guards';
import { SharedModule } from 'src/core/shared/shared.module';
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(storeName, reducers),
    EffectsModule.forFeature(effects),
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              import('./container/todo-home/todo-home.module').then(
                todoHome => todoHome.TodoHomeModule
              )
          },
          {
            path: 'list',
            loadChildren: () =>
              import('./container/todo-list/todo-list.module').then(
                list => list.TodoListModule
              )
          },
          {
            path: 'account',
            loadChildren: () =>
              import('./container/users/users.module').then(
                user => user.UsersModule
              )
          },
          {
            path: 'crud/:id',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(
                crud => crud.TodoListCrudModule
              ),
            canActivate: [fromGuards.TodoExistGuard]
          },
          {
            path: 'crud',
            loadChildren: () =>
              import('./container/todo-list-crud/todo-list-crud.module').then(
                crud => crud.TodoListCrudModule
              )
          },
          {
            path: 'detail/:id',
            loadChildren: () =>
              import('./container/todo-detail/todo-detail.module').then(
                detail => detail.TodoDetailModule
              )
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
        ]
      }
    ])
  ],
  providers: [ApiServiceService, ...fromGuards.guards]
})
export class TodoModule {}
