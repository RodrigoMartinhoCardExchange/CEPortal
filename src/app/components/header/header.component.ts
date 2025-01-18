import { Component } from '@angular/core';
import { IconButtonDirective } from '@cardexchangesolutions/cex-components';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconButtonDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
