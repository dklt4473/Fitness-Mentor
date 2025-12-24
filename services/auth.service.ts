
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ROOT_URL } from '../app.constants';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';

export const AUTHENTICATED_USER = 'authenticatedUser';
export const TOKEN = 'token';
export const PAGE_ID = 'pageId';
export const USER_ID = 'userId';
export const USER_ROLE = 'userRole';

export class AuthenticationBean {
  constructor(public userId: number, public token: string, public role: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(`${ROOT_URL}api/register`, user).pipe(
      catchError(this.handleError)
    );
  }
  executeAuthencationService(email: string, password: string): Observable<AuthenticationBean> {
    return this.http.post<AuthenticationBean>(`${ROOT_URL}api/login`, { email, password }).pipe(
      map(data => {
        localStorage.setItem(USER_ID, data.userId.toString());
        localStorage.setItem(AUTHENTICATED_USER, email);
        localStorage.setItem(TOKEN, `Bearer ${data.token}`);
        localStorage.setItem(USER_ROLE, data.role);
        return data;
      }),
      catchError(this.handleError)
    );
  }

  getUserRole(): string {
    return localStorage.getItem(USER_ROLE);
  }

  getAuthenticatedUserId(): number {
    return parseInt(localStorage.getItem(USER_ID));
  }

  getAuthenticatedUser(): string {
    return localStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      return localStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem(AUTHENTICATED_USER);
    return user !== null;
  }

  logout(): void {
    localStorage.removeItem(AUTHENTICATED_USER);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(PAGE_ID);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_ROLE);
  }

  pageId(): string {
    let pageId = localStorage.getItem(PAGE_ID);
    if (pageId === null) {
      pageId = 'login';
      localStorage.setItem(PAGE_ID, pageId);
    }
    return pageId;
  }

  setPageId(pageId: string): void {
    localStorage.setItem(PAGE_ID, pageId);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 409) {
      return throwError('UserAlreadyExists');
    } else {
      return throwError('An unexpected error occurred.');
    }
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${ROOT_URL}api/users/${id}`);
  }
}
