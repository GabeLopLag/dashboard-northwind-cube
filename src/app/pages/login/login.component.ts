import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { AlertService } from "../../services/alert.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(["/"]);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.f.email.value, this.f.password.value);
    this.authenticationService.login({ userName: this.f.email.value, password: this.f.password.value }).pipe(first()).subscribe(
        (data) => {
          this.router.navigate(["/top5"]);
        },
        (error) => {
          this.alertService.error(error.error.msg);
          this.loading = false;
        }
      );
  }
}