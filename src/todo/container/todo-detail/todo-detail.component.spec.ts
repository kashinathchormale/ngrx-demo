import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailComponent } from './todo-detail.component';

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CrudComponent } from './crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import {
    ProductAppState,
  reducer,
  userReducer,
  storeName
} from 'src/todo/storev7';
import { SharedModule } from 'src/core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    const reducers: ActionReducerMap<ProductAppState> = {
      products: reducer,
     // users: userReducer
    };
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ TodoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
