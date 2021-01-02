import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class MainService {
  public URL = "http://localhost:3500";

  constructor(private http: HttpClient, private _router: Router) {}

  getCheck() {
    this.http.get(`${this.URL}/verify/token`).subscribe((res: any[]) => {
      if (res["status"] === "failed" && res["code"] === 401) {
        this._router.navigate(["/login"]);
      }
    });
  }
}
