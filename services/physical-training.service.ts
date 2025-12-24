
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhysicalTraining } from '../models/physical-training.model';
import { Observable } from 'rxjs';
import { PhysicalTrainingRequest } from '../models/physical-training-request.model';
import { ROOT_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PhysicalTrainingService {

  constructor(private httpClient: HttpClient) {}

  // Physical Training CRUD operations

  getAllPhysicalTrainings():Observable<any>{
    return this.httpClient.get(ROOT_URL+"api/physicalTraining");
  }
  getPhysicalTrainingById(trainingId: number): Observable<PhysicalTraining> {
    return this.httpClient.get<PhysicalTraining>(`${ROOT_URL}api/physicalTraining/${trainingId}`);
  }

  addPhysicalTraining(training: PhysicalTraining): Observable<PhysicalTraining> {
    return this.httpClient.post<PhysicalTraining>(`${ROOT_URL}api/physicalTraining`, training);
  }

  updatePhysicalTraining(trainingId: number, training: PhysicalTraining): Observable<PhysicalTraining> {
    return this.httpClient.put<PhysicalTraining>(`${ROOT_URL}api/physicalTraining/${trainingId}`, training);
  }

  deletePhysicalTraining(trainingId: number): Observable<void> {
    return this.httpClient.delete<void>(`${ROOT_URL}api/physicalTraining/${trainingId}`);
  }

  // Physical Training Request operations

  getAllPhysicalTrainingRequests(): Observable<PhysicalTrainingRequest[]> {
    return this.httpClient.get<PhysicalTrainingRequest[]>(`${ROOT_URL}api/physical-training-request`);
  }

  getPhysicalTrainingRequestsByUserId(userId:number):Observable<any>{
        return this.httpClient.get(ROOT_URL+"api/physical-training-request/user/"+userId);
      }

  addPhysicalTrainingRequest(request: PhysicalTrainingRequest): Observable<PhysicalTrainingRequest> {
    return this.httpClient.post<PhysicalTrainingRequest>(`${ROOT_URL}api/physical-training-request`, request);
  }

  updatePhysicalTrainingRequest(requestId: number, request: PhysicalTrainingRequest): Observable<PhysicalTrainingRequest> {
    return this.httpClient.put<PhysicalTrainingRequest>(`${ROOT_URL}api/physical-training-request/${requestId}`, request);
  }

  deletePhysicalTrainingRequest(requestId: number): Observable<void> {
    return this.httpClient.delete<void>(`${ROOT_URL}api/physical-training-request/${requestId}`);
  }
}
