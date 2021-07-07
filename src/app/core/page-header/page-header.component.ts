import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Output() sidenavClicked = new EventEmitter<void>()
  @Input() tabName: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSidenavToggle() {
    this.sidenavClicked.emit();
  }

}
