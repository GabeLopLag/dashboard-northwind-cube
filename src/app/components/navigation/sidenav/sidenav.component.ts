import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}
  getUser() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.authenticationService.logout();
    this.router.navigate(["/"]);
  }
}
