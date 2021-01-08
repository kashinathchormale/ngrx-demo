import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/core/shared/shared.module';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,RouterModule.forRoot([])],
      declarations: [ProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
