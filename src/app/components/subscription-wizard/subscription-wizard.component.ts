import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HostingLocation } from '../../data/enums/hosting-location';
import { Edition } from '../../data/enums/edition';
import { ButtonDirective, FormFieldComponent, InputComponent, OptionComponent, StepComponent, StepperComponent } from '@cardexchangesolutions/cex-components';

@Component({
  selector: 'app-subscription-wizard',
  standalone: true,
  imports: [
    StepperComponent,
    StepComponent,
    ButtonDirective,
    TranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    FormFieldComponent,
    OptionComponent
  ],
  templateUrl: './subscription-wizard.component.html',
  styleUrl: './subscription-wizard.component.scss',
})
export class SubscriptionWizardComponent {
  @ViewChild(StepperComponent) stepper?: StepperComponent;

  protected parentGroup!: FormGroup;
  protected stepIndex: number = 0;
  protected hostingLocations: string[] = Object.values(HostingLocation);
  protected editions: string[] = Object.values(Edition);

  constructor(private location: Location, private formBuilder: FormBuilder) {
    this.setupForm();
  }

  // Goes back to the previous route.
  protected goBack(): void {
    this.location.back();
  }

  // Goes to the next step.
  protected nextStep(): void {
    this.stepper?.nextStep();
  }

  // Goes back to the previous step if there are steps to go back to,
  // otherwise leaves the current step and shows the content inside
  // the stepper but outside of any step.
  protected previousStep(): void {
    this.stepper?.previousStep();
  }

  protected setStepIndex(newIndex: number): void {
    this.stepIndex = newIndex;
  }

  protected getNestedGroup(groupName: string): FormGroup {
    return this.parentGroup.get(groupName) as FormGroup;
  }

  protected enableSetupPeriod(): void {
    const setupPeriodControl = this.parentGroup.get('step3.setupPeriod');
    setupPeriodControl?.enable();
  }

  protected disableSetupPeriod(): void {
    const setupPeriodControl = this.parentGroup.get('step3.setupPeriod');
    setupPeriodControl?.disable();
  }

  private setupForm(): void {
    this.parentGroup = this.formBuilder.group({
      name: new FormControl<string>('', [Validators.required]),
      version: new FormControl<string>('', [Validators.required]),
      step3:  this.formBuilder.group({
        plan: new FormControl<number>(0, [Validators.required]),
        hasSetupPeriod: new FormControl<boolean>(false),
        setupPeriod: new FormControl<number>({value: 30, disabled: true}),
        hostingLocation: new FormControl<string>('', [Validators.required])
      }),
      step4: this.formBuilder.group({
        startDate: new FormControl('', [Validators.required]),
        contractLength: new FormControl<number>(0, [Validators.required])
      }),
      step5: this.formBuilder.group({
        paymentTerm: new FormControl<string>('term', [Validators.required]),
        discount: new FormControl<number>(0)
      }),
      step6: this.formBuilder.group({
        renewalTerm: new FormControl<string>(''),
        poNumber: new FormControl<string>(''),
        recordPlan: new FormControl<string>('', [Validators.required])
      }),
      step7: this.formBuilder.group({
        edition: new FormControl<string>('', [Validators.required]),
        subscriptionsNumber: new FormControl<number>(1, [Validators.required])
      }),
      step8: this.formBuilder.group({
        aditionalSessions: new FormControl<boolean>(false),
        aditionalSessionsNumber: new FormControl<number>(0)
      }),
      cardExchangeLink: new FormControl<boolean>(false)
    })
  }
}
