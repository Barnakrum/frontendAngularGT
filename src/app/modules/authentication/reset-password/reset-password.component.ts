import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  errorMessage: string | undefined;

  ngOnInit(): void {}
}
