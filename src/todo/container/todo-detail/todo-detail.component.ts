import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/models/user.interface';
import { Store, select } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';

import * as fromIndexStore from '../../storev7/index';
import { ITodoList } from 'src/models/list.interface';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailComponent implements OnInit {

  crudForm: FormGroup;
  id: BehaviorSubject<number> = new BehaviorSubject(0);
  pname: BehaviorSubject<any> = new BehaviorSubject('');
  btnText: string;
  user$: Observable<IUser>;

  // crudForm: FormGroup;
  // id: BehaviorSubject<number> = new BehaviorSubject(0);
  // btnText: string;
  // user$: Observable<IUser>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromIndexStore.ProductAppState>
  ) {}

  ngOnInit() {
    this.initForm();
    this.getTodoFromRouterState();
  }

  private getTodoFromRouterState() {
    this.store
      .select(fromIndexStore.getSelectedProduct)
      .pipe(
        take(1),
        map(data => {
          if (data) {
            this.id.next(data.id);
            this.pname.next(data);
            this.crudForm.patchValue({
              ...data
            });
          }
        })
      )
      .subscribe();
  }

  private initForm() {
    this.crudForm = this.fb.group({
      title: '',
      userId: '',
      timestamp: '',
      productId: '',
      productName: '',
      price: '',
      color: '',
      quantity: '',
      size: '',
      category: ''
    });
  }

  onSubmit() {
    this.crudForm.patchValue({
      timestamp: new Date().getTime
    });
  }

  addItem() {
    const payload: ITodoList = {
      ...this.crudForm.value,
      id: this.id.value,
      timestamp: new Date().getTime(),
      userId: 1
    };
    this.store.dispatch(new fromIndexStore.CreateProduct(payload));
  }

  updateItem() {
    const payload: ITodoList = {
      ...this.crudForm.value,
      id: this.id.value,
      timestamp: new Date().getTime()
    };
    this.store.dispatch(new fromIndexStore.UpdateProduct(payload));
  }

  deleteItem() {
    const payload = { id: this.id.value, ...this.crudForm.value };
    this.store.dispatch(new fromIndexStore.DeleteProduct(payload));
  }

}
