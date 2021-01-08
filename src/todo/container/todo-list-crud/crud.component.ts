import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take, map } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';
import { ITodoList } from 'src/models/list.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromIndexStore from '../../storev7/index';
import { IUser } from 'src/models/user.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent implements OnInit {
  crudForm: FormGroup;
  id: BehaviorSubject<number> = new BehaviorSubject(0);
  btnText: string;
  user$: Observable<IUser>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromIndexStore.ProductAppState>,
  ) {

  }

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
      productName: [
        "",
        [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]
      ],
      price:  [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(9)
        ]
      ],
      quantity:  [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.maxLength(2)
        ]
      ],
      datepicker:[
        "",
        [
          Validators.required
        ]
      ],
      stock: [
        "",
      ]
    });
  }

  get f() {
    return this.crudForm.controls;
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
