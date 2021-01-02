import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.css"],
})
export class RemindersComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  gotoAlarm() {
    this._router.navigate(["/calendar-alarm"]);
  }

  addReminder() {
    this._router.navigate(["/add-reminder"]);
  }
}
