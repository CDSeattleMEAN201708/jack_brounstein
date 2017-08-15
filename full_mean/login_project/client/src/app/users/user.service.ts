import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { User } from "./user"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(new_user: User){
    let maybe_observable = this.http.post("/user_login", new_user)

    return maybe_observable
            .map(data => data.json())
            .toPromise()
  }

  display_users(){
    return this.http.get("/get_all_users")
            .map(data => data.json())
            .toPromise()
  }

  check_logged_in(){
    return this.http.get("/get_logged_in_user")
            .map(data => data.json())
            .toPromise()
  }

}
