import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormSwitcherComponent } from './form-switcher/form-switcher.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  LoginComponent,
  FormSwitcherComponent,
  RegisterComponent,
  ResetPasswordComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [...components],
})
export class AuthenticationModule {}
