import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../models/AuthData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  authData: AuthData = null;

  ngOnInit(): void {
    this.authService.authData$.subscribe(authData => {
      this.authData = authData;
    });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}
