import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private auth: AuthService) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
