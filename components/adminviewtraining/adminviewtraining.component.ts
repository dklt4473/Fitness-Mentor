import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhysicalTraining } from 'src/app/models/physical-training.model';
import { AuthService } from 'src/app/services/auth.service';
 
import { PhysicalTrainingService } from 'src/app/services/physical-training.service';
 
@Component({
  selector: 'app-adminviewtraining',
  templateUrl: './adminviewtraining.component.html',
  styleUrls: ['./adminviewtraining.component.css']
})
export class AdminviewtrainingComponent implements OnInit {
 
 
 
  constructor(private physicalTrainingService: PhysicalTrainingService, private router: Router, private authService: AuthService) { }
 
  filter: string = '';
  showModal: boolean = false;
  physicalTrainings: PhysicalTraining[];
 
  loadTrainings() {
    this.physicalTrainingService.getAllPhysicalTrainings().subscribe((data) => {
      this.physicalTrainings = data;
    });
  }
 
 
  deleteTraining(id: number) {
    this.physicalTrainingService.deletePhysicalTraining(id).subscribe((data) => {
      this.loadTrainings();
    });
  }
   
  ngOnInit(): void {
    this.loadTrainings();
  }
 
  editTraining(id) {
    this.router.navigate(['/admin/editTraining/',id]);
  }
 
  sortData(column: string) {
    const isAsc = this.physicalTrainings[0][column] > this.physicalTrainings[this.physicalTrainings.length - 1][column];
    this.physicalTrainings.sort((a, b) => {
      if (a[column] > b[column]) {
        return isAsc ? 1 : -1;
      }
      if (a[column] < b[column]) {
        return isAsc ? -1 : 1;
      }
      else {
        return 0;
      }
    });
  }
 
  showLogoutModal() {
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
 