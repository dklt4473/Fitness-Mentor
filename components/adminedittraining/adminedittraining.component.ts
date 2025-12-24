import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicalTrainingService } from 'src/app/services/physical-training.service';

@Component({
  selector: 'app-adminedittraining',
  templateUrl: './adminedittraining.component.html',
  styleUrls: ['./adminedittraining.component.css']
})
export class AdminedittrainingComponent implements OnInit {


  editTrainingForm: FormGroup;
  formSubmitted: boolean = false;
  trainingId: number;
  constructor(private fb: FormBuilder, private service: PhysicalTrainingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.editTrainingForm = this.fb.group({
      physicalTrainingId: [0],
      trainingName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      trainerName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      isIndoor: ['', [Validators.required]],
      fee: ['', [Validators.required]],
      focusArea: ['', [Validators.required]],
      physicalRequirements: ['', [Validators.required]]
    });

    this.trainingId = this.route.snapshot.params['id'];
    this.service.getPhysicalTrainingById(this.trainingId).subscribe((data) => {
      this.editTrainingForm.setValue(data);
    });

  }

  updateTraining() {
    this.formSubmitted = true;
    if (this.editTrainingForm.valid) {
      // alert(this.formSubmitted ? "Edited Training successfully" : "Not Edited successfully")
      this.service.updatePhysicalTraining(this.trainingId,this.editTrainingForm.value).subscribe((data)=>{
        this.router.navigate(['/admin/viewTraining']);
      });
    }

    this.showSuccessMessage();
  }

  get f() {
    return this.editTrainingForm.controls;
  }

  showSuccessMessage(){
    const successMessage=document.getElementById('successMessage');
    successMessage?.classList.add('active');
  }
 
  closeSuccessMessage(){
    this.editTrainingForm.reset();
    this.router.navigate(['/admin/viewTraining']);
    const successMessage=document.getElementById('successMessage');
    successMessage.classList.remove('active'); 
  }

}
