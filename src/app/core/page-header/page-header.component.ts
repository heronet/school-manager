import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavClicked = new EventEmitter<void>()
  pageTitle: string = "";
  pageHeaderSubscription: Subscription;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.pageHeaderSubscription = this.uiService.pageHeader$.subscribe(title => {
      this.pageTitle = title;
    });
  }
  onSidenavToggle() {
    this.sidenavClicked.emit();
  }
  ngOnDestroy() {
    this.pageHeaderSubscription.unsubscribe();
  }

}
