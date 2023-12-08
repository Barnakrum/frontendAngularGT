import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup | undefined;

  errorMessage: string | undefined;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
    });
  }

  onFormSubmit(): void {
    if (this.formGroup?.valid) {
      console.log(this.formGroup?.value);
    }
  }
}
