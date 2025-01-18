import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubscriptionWizardComponent } from './components/subscription-wizard/subscription-wizard.component';
import { SetupComponent } from './components/setup/setup.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'setup',
        component: SetupComponent,
        canActivate: [authGuard]
    },
    {
        path: 'subscription',
        component: SubscriptionWizardComponent,
        canActivate: [authGuard]
    },
];
