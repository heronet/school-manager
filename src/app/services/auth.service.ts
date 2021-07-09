import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthData } from '../models/AuthData';
import { map } from 'rxjs/operators'
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.base_url;

  private authenticateSubject = new ReplaySubject<AuthData>();
  authData$ = this.authenticateSubject.asObservable();

  private isAuthenticated = new ReplaySubject<boolean>();
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const data = {
      username,
      password
    }
    return this.http.post<AuthData>(`${this.baseUrl}/account/login`, data).pipe(
      map(authData => {
        this.authenticateSubject.next(authData);
      })
    );
  }
  logout() {
    this.authenticateSubject.next(null);
    this.isAuthenticated.next(null);
  }
}
