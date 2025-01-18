import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BadgeComponent,
  ButtonDirective,
  IconButtonDirective,
  PaginatorComponent,
  TableCellDirective,
  TableColumnDirective,
  TableComponent,
  TableHeaderDirective,
} from '@cardexchangesolutions/cex-components';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from '../../data/interfaces/subscription';
import { SubscriptionStatus } from '../../data/enums/subscription-status';
import { CommonModule } from '@angular/common';
import { BadgeTypes } from '../../data/types/badge-types';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    TranslatePipe,
    ButtonDirective,
    TableComponent,
    PaginatorComponent,
    CommonModule,
    BadgeComponent,
    TableColumnDirective,
    TableHeaderDirective,
    TableCellDirective,
    IconButtonDirective
  ],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss',
})
export class SubscriptionsComponent implements OnInit {
  constructor(private router: Router) {}

  defaultSubscription: Subscription = {
    subscriber: '',
    status: SubscriptionStatus.Active,
    type: '',
    startDate: new Date(),
    renewDate: new Date(2),
    addOns: 0
  };
  headers: string[] = ['subscriber', 'status', 'type', 'startDate', 'renewDate', 'addOns', 'actions'];
  dataSource: Subscription[] = [
    {
      subscriber: 'First Subscriber',
      status: SubscriptionStatus.Active,
      type: 'Type 1',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 1
    },
    {
      subscriber: 'Second Subscriber',
      status: SubscriptionStatus.ExpiringSoon,
      type: 'Type 2',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 4
    },
    {
      subscriber: 'Third Subscriber',
      status: SubscriptionStatus.Expired,
      type: 'Type 4',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 13
    },
    {
      subscriber: 'Fourth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Fifth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Sixth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Seventh Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Eighth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Ninth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
    {
      subscriber: 'Tenth Subscriber',
      status: SubscriptionStatus.New,
      type: 'Type 5',
      startDate: new Date(),
      renewDate: new Date(),
      addOns: 3
    },
  ];
  badgeTypes: Map<SubscriptionStatus, BadgeTypes> = new Map([
    [SubscriptionStatus.Active, 'success-low'],
    [SubscriptionStatus.ExpiringSoon ,'warning-low'],
    [SubscriptionStatus.Expired, 'danger-low'],
    [SubscriptionStatus.New, 'brand-low']
  ])

  ngOnInit(): void {
  }

  protected openSubscriptionWizard() {
    this.router.navigate(['/subscription']);
  }
}
