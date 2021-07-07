import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  selectedTab = "Store"
  constructor() { }

  ngOnInit(): void {
  }
  onSelectTab(name: string) {
    this.selectedTab = name
  }

}
