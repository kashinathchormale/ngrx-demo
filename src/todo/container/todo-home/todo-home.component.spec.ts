import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomeComponent } from './todo-home.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ProductAppState, reducer } from 'src/todo/storev7';

describe('ProductHomeComponent', () => {
  let component: ProductHomeComponent;
  let fixture: ComponentFixture<ProductHomeComponent>;

  beforeEach(async(() => {
    const reducers: ActionReducerMap<ProductAppState> = {
      products: reducer,
     // users: userReducer
    };
    TestBed.configureTestingModule({
      declarations: [ ProductHomeComponent ],
      imports: [
        // ReactiveFormsModule,
        // SharedModule,
        // RouterModule,
        // BrowserAnimationsModule,
        StoreModule.forRoot(reducers)
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
