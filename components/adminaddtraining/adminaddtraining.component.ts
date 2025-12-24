import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PhysicalTrainingService } from 'src/app/services/physical-training.service';
 
@Component({
  selector: 'app-adminaddtraining',
  templateUrl: './adminaddtraining.component.html',
  styleUrls: ['./adminaddtraining.component.css']
})
export class AdminaddtrainingComponent implements OnInit {
 
  trainingForm: FormGroup;
  formSubmitted: boolean = false;
  showModal: boolean = false;
  constructor(private pts: PhysicalTrainingService, private fb: FormBuilder, private router: Router, private authService: AuthService) { }
 
  ngOnInit(): void {
    this.trainingForm = this.fb.group({
      trainingName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      trainerName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      isIndoor: ['', [Validators.required]],
      fee: ['', [Validators.required, Validators.min(0)]],
      focusArea: ['', [Validators.required]],
      physicalRequirements: ['', [Validators.required]]
    });
  }
 
  addTraining() {
    this.formSubmitted = true;
    if (this.trainingForm.valid) {
      let training = this.trainingForm.value;
      if (training.isIndoor === "outdoor") {
        training.isIndoor = false;
      }
      else {
        training.isIndoor = true;
      }
      // console.log(training);
      // alert(this.formSubmitted ? "NewTraining Added Successfully" : "NewTraining Not Added Successfully");
      this.pts.addPhysicalTraining(training).subscribe(data => this.router.navigate(['/admin/viewTraining']));
 
    }
    this.showSuccessMessage();
  }
 
  get f() {
    return this.trainingForm.controls;
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
 
  showSuccessMessage(){
    const successMessage=document.getElementById('successMessage');
    successMessage?.classList.add('active');
  }
 
  closeSuccessMessage(){
    this.trainingForm.reset();
    this.router.navigate(['/admin/viewTraining']);
    const successMessage=document.getElementById('successMessage');
    successMessage.classList.remove('active');
 
   
  }
 
  back(){
    this.router.navigate(['/admin/viewTraining']);
  }
 
}
 