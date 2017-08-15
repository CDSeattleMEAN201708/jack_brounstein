import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  user: User

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User
  }

  create_user(){
    console.log(this.user)
    this.user_service.login(this.user)
      .then(() => this.router.navigate(["/dashboard"]))
      .catch(err => console.log(err))
  }

}
