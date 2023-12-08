import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';


const components = [LoginComponent]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ...components
  ]
})
export class AuthenticationModule { }
