import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private uiService: UiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.uiService.setPeageHeader("Login");
  }
  onSubmit({ value }: NgForm) {
    this.authService.login(value.username.trim(), value.password.trim()).subscribe(res => {
      this.router.navigateByUrl("/store");
    }, err => console.log(err)
    )
    
  }
}
