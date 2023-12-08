import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formGroup: FormGroup | undefined;

  errorMessage: string | undefined;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [
        undefined,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,}$/gm),
        ],
      ],
      repeatPassword: [undefined, Validators.required],
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.value);
  }
}
