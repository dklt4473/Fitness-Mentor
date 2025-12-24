import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminaddtrainingComponent } from './components/adminaddtraining/adminaddtraining.component';
import { AdminedittrainingComponent } from './components/adminedittraining/adminedittraining.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewappliedrequestComponent } from './components/adminviewappliedrequest/adminviewappliedrequest.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AdminviewtrainingComponent } from './components/adminviewtraining/adminviewtraining.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UseraddrequestComponent } from './components/useraddrequest/useraddrequest.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewappliedrequestComponent } from './components/userviewappliedrequest/userviewappliedrequest.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { UserviewtrainingComponent } from './components/userviewtraining/userviewtraining.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminSearchPipe } from './pipes/admin-search.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { HttpIntercepterBasicAuthService } from './services/http-intercepter-basic-auth.service';

import { AboutComponent } from './components/about/about.component';

import { BbmiCalculatorComponent } from './components/bbmi-calculator/bbmi-calculator.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

import { AdminFilterPipe } from './pipes/admin-filter.pipe';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    AdminaddtrainingComponent,
    AdminedittrainingComponent,
    AdminnavComponent,
    AdminviewappliedrequestComponent,
    AdminviewfeedbackComponent,
    AdminviewtrainingComponent,
    AuthguardComponent,
    ErrorComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    UseraddfeedbackComponent,
    UseraddrequestComponent,
    UsernavComponent,
    UserviewappliedrequestComponent,
    UserviewfeedbackComponent,
    UserviewtrainingComponent,
    AdminSearchPipe,
    UserSearchPipe,
    NavbarComponent,
    AboutComponent,



    BbmiCalculatorComponent,


    PrivacyPolicyComponent,

    AdminFilterPipe,


    UserFilterPipe,




  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
