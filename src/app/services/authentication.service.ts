import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { User } from "../models/user";


@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: object) {
    return this.http.post('http://localhost:3000/api/auth/login', user).pipe(
      map((result: any) => {
        console.log(result);
        localStorage.setItem("currentUser", JSON.stringify(result.token));
        this.currentUserSubject.next(result.token);
        return result;
      })
    );
  }
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
