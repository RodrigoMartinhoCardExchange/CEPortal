import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ButtonDirective, ExpansionPanelComponent } from '@cardexchangesolutions/cex-components';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ButtonDirective, ExpansionPanelComponent, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  constructor(private oauthService: OAuthService, private breakpointObserver: BreakpointObserver) {
  }

  readonly DASHBOARD: string = 'dashboard';
  readonly HELP: string = 'help';
  readonly SETTINGS: string = 'settings';
  readonly SUBSCRIPTIONS: string = 'subscriptions';
  private activeRoute: string = '/dashboard';
  readonly window: any;
  showArrow: boolean = true;

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1599px)', '(min-width: 1600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(max-width: 1599px)']) {
          // When the viewport width is 1599px or below, showArrow should be false
          this.setShowArrow(false);
        } else {
          // When the viewport width is 1600px or above, showArrow should be true
          this.setShowArrow(true);
        }
    });
  }

  isActive(activeButton: string): boolean {
    return this.activeRoute.includes(activeButton);
  }

  logout(): void {
    this.oauthService.revokeTokenAndLogout();
  }

  setShowArrow(value: boolean): void {
    this.showArrow = value;
  }
}
