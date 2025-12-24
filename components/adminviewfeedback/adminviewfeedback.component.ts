import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-adminviewfeedback',
  templateUrl: './adminviewfeedback.component.html',
  styleUrls: ['./adminviewfeedback.component.css']
})
export class AdminviewfeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [];
  user:User={
    email: '',
    password: '',
    username: '',
    mobileNumber: '',
    userRole: ''
  }

  constructor(private service: FeedbackService) { }

  ngOnInit(): void {
    this.service.getFeedbacks().subscribe((data) => 
    {this.feedbacks = data;});
  }
  selectedFeedback: any = null;

  showMore(feedback: any): void {
    this.selectedFeedback = feedback;
  }
  closeModal(): void {
    this.selectedFeedback = null;
  }

  goBack() {
    this.selectedFeedback = null;
  }


}
