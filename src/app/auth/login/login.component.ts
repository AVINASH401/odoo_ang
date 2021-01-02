import { MainService } from "./../../services/main.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(
    private _router: Router,
    private main: MainService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  registerPage() {
    this._router.navigate(["/register"]);
  }

  adminLogin() {
    if (this.email && this.password) {
      const fd: FormData = new FormData();
      fd.append("email", this.email);
      fd.append("password", this.password);

      this.http
        .post(`${this.main.URL}/admin/adminLogin`, fd)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            localStorage.setItem("token", res["token"]);
            localStorage.setItem("role", res["ni0m0da"]);
            this._router.navigate(["/dashboard"]);
          } else {
            alert(res["Message"]);
          }
        });
    } else {
      alert("Please enter all the fields");
    }
  }
}
