import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  confirmEmail: string;
  notLoggedIn: boolean;
  showSpinner: boolean;

  constructor(private router: Router) {
    this.notLoggedIn = true;
  }

  ngOnInit() {

  }

  logout() : void {
    this.notLoggedIn = true;
  }

  signUp() : void {
    if(this.email != this.confirmEmail) {
      alert("Emails must match");
    }
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin') {
      this.notLoggedIn = false;
      this.router.navigate(["user"]);
    } else {
      alert("Invalid Credentials");
    }
  }
}
