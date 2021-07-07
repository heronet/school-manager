import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onTabChange(e: MatTabChangeEvent) {
    this.selectedTab.emit(e.tab.textLabel);
  }
}
