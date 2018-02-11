import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router/src/router_module';
import { userRoutes } from './userRoutes';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
