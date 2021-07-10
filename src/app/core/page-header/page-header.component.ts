import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavClicked = new EventEmitter<void>()
  @Output() sidenavClosed = new EventEmitter<void>()
  pageTitle: string = "";
  isAuthenticated = false;
  pageHeaderSubscription: Subscription;
  authStatusSubscription: Subscription;

  constructor(private uiService: UiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.pageHeaderSubscription = this.uiService.pageHeader$.subscribe(title => {
      this.pageTitle = title;
    });
    this.authStatusSubscription = this.authService.isAuthenticated$.subscribe(res => {
      this.isAuthenticated = res;
      if(!this.isAuthenticated) { // Close the sidenav if is was open while logging out.
        this.sidenavClosed.emit();
      }
    })
  }
  onSidenavToggle() {
    this.sidenavClicked.emit();
  }
  onSidenavClosed() {
    this.sidenavClosed.emit();
  }
  ngOnDestroy() {
    this.pageHeaderSubscription.unsubscribe();
    this.authStatusSubscription.unsubscribe();
  }

}
