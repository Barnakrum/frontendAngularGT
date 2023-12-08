import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup | undefined;

  errorMessage: string | undefined;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, Validators.required],
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.value);
  }
}
