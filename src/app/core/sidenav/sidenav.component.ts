import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/models/NavItem';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {header: 'Dashboard', url: '/dashboard'},
    {header: 'Store', url: '/store'},
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  navigate(navItem: NavItem) {
    this.router.navigateByUrl(`${navItem.url}`);
  }

}
