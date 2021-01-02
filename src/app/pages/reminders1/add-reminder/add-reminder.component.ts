import { MainService } from "./../../../services/main.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-add-reminder",
  templateUrl: "./add-reminder.component.html",
  styleUrls: ["./add-reminder.component.css"],
})
export class AddReminderComponent implements OnInit {
  contactList: any;
  contacts: FormControl = new FormControl();
  calAlarmList: any;

  constructor(private http: HttpClient, private main: MainService) {}

  ngOnInit() {
    this.getAllContacts();
    this.getCalAlarm();
  }

  getAllContacts() {
    this.http
      .get(`${this.main.URL}/contacts/getAllContacts`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.contactList = res["contacts"];
        }
      });
  }

  getCalAlarm() {
    this.http
      .get(`${this.main.URL}/reminder/getCalAlarm`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.calAlarmList = res["calalarm"];
        }
      });
  }
}
