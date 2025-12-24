import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhysicalTrainingService } from 'src/app/services/physical-training.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminviewappliedrequest',
  templateUrl: './adminviewappliedrequest.component.html',
  styleUrls: ['./adminviewappliedrequest.component.css']
})
export class AdminviewappliedrequestComponent implements OnInit {
  rejectStatus: boolean = false;
  requests: any[] = [];
  requests1: any[] = [];
  searchText: string = "";
  filterText: string = "";
  show: any = {};
  toShow: boolean = false;
  rejectRequest: any = null; // New variable to hold request to reject
  rejectReason: string = ""; // New variable to hold rejection reason

  constructor(
    private physicalTrainingService: PhysicalTrainingService,
    private user: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPhysicalTrainingRequests();
  }

  getAllPhysicalTrainingRequests() {
    this.physicalTrainingService.getAllPhysicalTrainingRequests().subscribe(data => {
      this.requests = data;
      this.requests1 = data;
    });
  }

  approved(request: any) {
    request.status = 'Approved';
    request.rejectionReason = null; // Clear any previous reason
    this.physicalTrainingService.updatePhysicalTrainingRequest(request.physicalTrainingRequestId, request)
      .subscribe(() => {
        this.getAllPhysicalTrainingRequests();
      });
  }

  rejected(request: any) {
    this.rejectRequest = request;
    this.rejectReason = ""; // Reset rejection reason
  }

  confirmRejection() {
    this.rejectStatus = true;
    if (this.rejectReason.trim()) {
      this.rejectRequest.status = 'Rejected';
      this.rejectRequest.rejectionReason = this.rejectReason;
      this.physicalTrainingService.updatePhysicalTrainingRequest(this.rejectRequest.physicalTrainingRequestId, this.rejectRequest)
        .subscribe(() => {
          this.getAllPhysicalTrainingRequests();
          this.rejectRequest = null; // Clear reject request
          this.rejectStatus = false;
        });
    } else {
      alert("Rejection reason is required.");
    }
  }

  showMore(request: any) {
    request.description = request.physicalTraining.description;
    this.show = request;
    this.toShow = true;
  }

  back(): void {
    this.toShow = false;
    this.rejectStatus = false;
    this.rejectRequest = null;
    this.rejectReason = "";
  }

  style(status: string) {
    status = status.toLowerCase();
    if (status === 'rejected') {
      return 'red';
    } else if (status === 'approved') {
      return 'green';
    } else {
      return 'orange';
    }
  }

  search() {
    let term = this.searchText.toLowerCase();
    this.requests = this.requests1.filter((request) => {
      return request.physicalTraining.trainingName.toLowerCase().includes(term);
    });
  }

  sort(status: string) {
    this.requests = this.requests1.filter((request) => {
      return request.status.toString().toLowerCase().includes(status);
    });
  }

  isActionDisabled(status: string): boolean {
    return status.toLowerCase() === 'approved' || status.toLowerCase() === 'rejected';
  }
}
