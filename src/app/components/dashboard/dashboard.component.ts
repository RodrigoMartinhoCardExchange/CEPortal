import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective, CardComponent, InputComponent } from '@cardexchangesolutions/cex-components';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, TranslatePipe, ButtonDirective, InputComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public version: string = '1';

  constructor (private router: Router) {}
}
