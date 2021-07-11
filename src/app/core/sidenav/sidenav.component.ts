import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  navItems: string[] = [];

  routeNames = {
    "/dashboard": "Dashboard",
    "/admin-dashboard": "Admin Dashboard",
    "/store": "Store"
  };
  private authClaimsSub: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getRoutes();
  }

  navigate(navItem: string) {
    this.router.navigateByUrl(`${navItem}`);
  }
  getRoutes() {
    this.authClaimsSub = this.authService.authData$.subscribe(data => {
      this.navItems.push('/dashboard');
      if(data?.roles?.includes('Admin')) {
        this.navItems.push('/admin-dashboard');
      }
      if(data?.claims) {
        let claims = data.claims;
        for (let index = 0; index < claims.length; index++) {
          const claim = claims[index];
          // Check if navItems already has route.
          if(this.navItems.indexOf('/store') === -1) { // If not, look for it. Don't otherwise
            if(claim === 'products.read') {
              this.navItems.push('/store');
            }
          }
        }
      } else {
        this.navItems = [];
      }
    })
  }
  ngOnDestroy() {
    this.authClaimsSub.unsubscribe();
  }

}
