import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userRole: string = '';
  showModal: boolean = false;
  selectedSection: string = '';
  sections: any = {
    strengthTraining: {
      title: 'Strength Training',
      details: 'Build your strength and stamina with our expert-guided training sessions. Our strength training programs are designed to help you achieve your fitness goals through progressive resistance exercises and proper form.'
    },
    flexibilityImprovement: {
      title: 'Flexibility Improvement',
      details: 'Improve your flexibility and reduce the risk of injuries with our yoga sessions. Our flexibility improvement programs focus on stretching techniques, breathing exercises, and muscle relaxation to enhance your overall mobility.'
    },
    hiitWorkouts: {
      title: 'HIIT Workouts',
      details: 'Burn calories and boost your metabolism with our high-intensity interval training (HIIT). Our HIIT workouts are designed to push you to your limits with short bursts of intense exercises followed by periods of rest.'
    }
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }

  login() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  getLoginInfo() {
    return this.authService.isUserLoggedIn();
  }
  logout() {
    this.showModal = true;
  }
 
  confirmLogout() {
    this.showModal = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
 
  cancelLogout() {
    this.showModal = false;
  }
  showInfo(section: string): void {
    this.selectedSection = section;
  }

  hoverEffect(event: Event): void {
    const element = event.target as HTMLElement;
    element.style.transform = 'scale(1.05)';
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }
  closeInfo(): void {
    this.selectedSection = '';
  }
  resetEffect(event: Event): void {
    const element = event.target as HTMLElement;
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = 'transparent';
  }
}
