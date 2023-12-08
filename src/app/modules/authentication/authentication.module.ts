import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { FormSwitcherComponent } from './form-switcher/form-switcher.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './register/register.component';

const components = [LoginComponent, FormSwitcherComponent, RegisterComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTabsModule],
  exports: [...components],
})
export class AuthenticationModule {}
