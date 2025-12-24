import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  passwordField: string = 'password';
  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
   
  }


  errorPopup:boolean=false;
  showSuccessPopup: boolean = false;
 
  
  login() {
    if (this.email && this.password) {
      this.authService.executeAuthencationService(this.email, this.password).subscribe(
        response => {
          const userRole = this.authService.getUserRole().toLowerCase();
          this.showSuccessPopup = true;
          setTimeout(() => {
            if (userRole === 'admin') {
              this.router.navigate(['/admin/viewTraining']);
            } else if (userRole === 'user') {
              this.router.navigate(['/user/viewTraining']);
            }
            this.showSuccessPopup = false;
          }, 2000); 


        },
        error => {
          this.errorPopup=true;
        }
      );
    }
  }


  togglePasswordVisibility(): void {
    this.passwordField = this.passwordField === 'password' ? 'text' : 'password';
  }

  closePopup() {
    this.showSuccessPopup = false;
    this.errorPopup=false;
  }
}

