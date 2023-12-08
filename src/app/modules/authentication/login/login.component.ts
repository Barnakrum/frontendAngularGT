import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string | undefined;
  ngOnInit(): void {}
}
