import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
// import { UsersRoutingModule } from './users-routing.module';
// import { UsersComponent } from './users.component';
// import { UserLoginComponent } from './components/user-login/user-login.component';
// import { UserRegisterComponent } from './components/user-register/user-register.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: LoginComponent
      }
    ])
  ]
})
export class LoginModule { }
