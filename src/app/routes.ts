import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/components/booking/booking.component';
import { DetailComponent } from './detail/components/detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/components/signin/signin.component';
import { SignupComponent } from './signup/components/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'detail',
        component: DetailComponent,
    },
    {
        path: 'booking',
        component: BookingComponent,
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: '404',
        component: Page404Component,
    },
    {
        path: '**',
        redirectTo: '/404',
    }
];
