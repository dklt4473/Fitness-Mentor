import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {
 
  constructor(private router:Router,private authService:AuthService) { }
  user:User={
    userId:0,
    email:'',
    password:'',
    username:'',
    mobileNumber:'',
    userRole:''
  }
  ngOnInit(): void {
    let uId = this.authService.getAuthenticatedUserId();
    this.authService.getUserById(uId).subscribe((data)=>{
      this.user=data;
    });
  }
  showTraining:boolean=false;
  showModal: boolean = false;
 
  toggleTraining(){
    this.showTraining = !this.showTraining;
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
 
}
 
 
 