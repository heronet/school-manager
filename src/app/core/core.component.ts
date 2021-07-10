import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthData } from '../models/AuthData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {
  authStatusSubscription: Subscription;
  isAuthenticated = false;
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.authStatusSubscription = this.authService.isAuthenticated$.subscribe(auth => {
      if(!auth) {
        this.isAuthenticated = auth;
        this.router.navigateByUrl("/login");
      } else {
        this.isAuthenticated = auth;
      }
    })
    this.setupUser();
  }
  setupUser() {
    this.isLoading = true;
    let userData = JSON.parse(localStorage.getItem('authData')) as AuthData
    if(userData) {
      this.authService.emitOldAuthData(userData); // For TokenInterceptor and Refresh token.
      this.authService.refrestToken(userData).pipe(take(1)).subscribe((newAuthData) => {
        this.authService.saveUserLocal(newAuthData); // Save minimal data.
        this.authService.setUser(newAuthData); // Emit full authData.
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.authService.setUser(null);
        localStorage.removeItem('authData');
        this.router.navigateByUrl('/login')
      })
    } else {
      this.isLoading = false;
      this.router.navigateByUrl('/login') // No feature is available without logging in.
    }
  }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  ngOnDestroy() {
    this.authStatusSubscription.unsubscribe();
  }
}
