import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  imageURL: string;
  name;
  email;
  password;
  picture: File;

  constructor(
    private _router: Router,
    private main: MainService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  loginPage() {
    this._router.navigate(["/login"]);
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.picture = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  adminRegister() {
    if (this.name && this.email && this.password) {
      const fd: FormData = new FormData();
      fd.append("name", this.name);
      fd.append("email", this.email);
      fd.append("password", this.password);
      if (this.picture) {
        fd.append("picture", this.picture);
      }
      this.http
        .post(`${this.main.URL}/admin/adminRegistration`, fd)
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
      alert("Please fill all the fields");
    }
  }
}
