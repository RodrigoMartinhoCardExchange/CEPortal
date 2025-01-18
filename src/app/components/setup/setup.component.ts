import { Component } from '@angular/core';
import { ButtonDirective } from '@cardexchangesolutions/cex-components';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-setup',
  imports: [TranslatePipe, ButtonDirective],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss'
})
export class SetupComponent {

}
