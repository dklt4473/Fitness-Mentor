import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';
import { ROOT_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // apiUrl = 'https://ide-bfaaceadecfbebaafcdbbabdbbfebbfbcdeedaee.premiumproject.examly.io/proxy/8080/api/feedback';

  sendFeedback(feedback: Feedback): Observable<any> {
    return this.httpClient.post(ROOT_URL+"api/feedback", feedback);
  }

  getAllFeedbacksByUserId(userId: number): Observable<any>{
    return this.httpClient.get(ROOT_URL+ "api/feedback/user/" +userId);
  }

  deleteFeedback(feedbackId: number): Observable<any>{
    return this.httpClient.delete(ROOT_URL+ "api/feedback/" +feedbackId);
  }

  getFeedbacks(): Observable<any>{
    return this.httpClient.get(ROOT_URL+"api/feedback");
  }

  constructor(private httpClient: HttpClient) { }

}
