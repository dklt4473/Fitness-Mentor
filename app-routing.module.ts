import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminaddtrainingComponent } from './components/adminaddtraining/adminaddtraining.component';
import { AdminviewtrainingComponent } from './components/adminviewtraining/adminviewtraining.component';
import { AdminedittrainingComponent } from './components/adminedittraining/adminedittraining.component';
import { AdminviewappliedrequestComponent } from './components/adminviewappliedrequest/adminviewappliedrequest.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UserviewtrainingComponent } from './components/userviewtraining/userviewtraining.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UseraddrequestComponent } from './components/useraddrequest/useraddrequest.component';
import { UserviewappliedrequestComponent } from './components/userviewappliedrequest/userviewappliedrequest.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { AuthGuard } from './services/auth.guard';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { AboutComponent } from './components/about/about.component';
import { BbmiCalculatorComponent } from './components/bbmi-calculator/bbmi-calculator.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'bmiCalculator',component:BbmiCalculatorComponent},
  {path:'privacyPolicy',component:PrivacyPolicyComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path:'about', component:AboutComponent},
  
  {
    path: 'admin/addTraining',
    component: AdminaddtrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'admin/viewTraining',
    component: AdminviewtrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'adminnav',
    component: AdminnavComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'usernav',
    component: UsernavComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'admin/editTraining/:id',
    component: AdminedittrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'admin/viewRequest',
    component: AdminviewappliedrequestComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'admin/viewFeedback',
    component: AdminviewfeedbackComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'user/addFeedback',
    component: UseraddfeedbackComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'user/viewTraining',
    component: UserviewtrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'user/viewFeedback',
    component: UserviewfeedbackComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'user/addRequest/:id',
    component: UseraddrequestComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'user/viewRequest',
    component: UserviewappliedrequestComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  
  { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' } },

  { path: 'authguard', component: AuthguardComponent },

  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
