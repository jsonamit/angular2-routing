import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {SignupComponent} from './signup/signup.component';
const app_rout: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'home', component: HomeComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'signup', component: SignupComponent},
];
export const routing = RouterModule.forRoot(app_rout);