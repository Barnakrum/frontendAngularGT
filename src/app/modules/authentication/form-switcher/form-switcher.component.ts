import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-form-switcher',
  templateUrl: './form-switcher.component.html',
  styleUrls: ['./form-switcher.component.scss'],
})
export class FormSwitcherComponent implements OnInit {
  links: string[] = ['login', 'register'];
  activeLink: string | undefined;

  background: ThemePalette = 'primary';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeLink = this.router.url.replace('/', '');
  }
}
