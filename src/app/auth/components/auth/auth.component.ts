import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerComponent } from '@cardexchangesolutions/cex-components';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    } else {
      this.login();
    }
  }

  get isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }
}
