import { SubscriptionStatus } from "../enums/subscription-status";

export interface Subscription {
    subscriber: string;
    status: SubscriptionStatus;
    type: string;
    startDate: Date;
    renewDate: Date;
    addOns: number;
}