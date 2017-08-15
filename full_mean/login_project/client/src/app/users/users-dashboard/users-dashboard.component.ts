import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  all_users: Array<User>

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.display_users()
      .then(users => this.all_users = users)
      .catch(err => console.log(err))

    this.user_service.check_logged_in()
      .then(user_id => console.log(user_id))
      .catch(() => this.router.navigate(["/login"]))
  }

}
