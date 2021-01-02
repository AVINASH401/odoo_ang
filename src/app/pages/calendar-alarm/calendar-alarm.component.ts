import { MainService } from "app/services/main.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";

@Component({
  selector: "app-calendar-alarm",
  templateUrl: "./calendar-alarm.component.html",
  styleUrls: ["./calendar-alarm.component.css"],
})
export class CalendarAlarmComponent implements OnInit {
  displayedColumns = [
    "name",
    "check1",
    "unit",
    "check2",
    "type",
    "check3",
    "action",
  ];

  dataSource = new MatTableDataSource();
  calAlarms: any;

  constructor(
    private http: HttpClient,
    public main: MainService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getCalAlarms();
  }

  getCalAlarms() {
    this.http
      .get(`${this.main.URL}/reminder/getCalAlarm`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.calAlarms = res["calalarm"];
          this.dataSource = new MatTableDataSource(this.calAlarms);
        }
      });
  }

  createAlarm() {
    this.http
      .get(`${this.main.URL}/reminder/addCalAlarm`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          alert("New Calendar alarm added");
          this.getCalAlarms();
        } else {
          alert("Calendar alarm not added");
        }
      });
  }

  editAlarm(element) {
    const fd: FormData = new FormData();
    fd.append("id", element._id);
    fd.append("name", element.name);
    fd.append("unit", element.unit);
    fd.append("type", element.type);

    this.http
      .post(`${this.main.URL}/reminder/editCalAlarm`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          alert("Calendar alarm updated");
          this.getCalAlarms();
        } else {
          alert("Calendar alarm not updated");
        }
      });
  }

  deleteCalAlarm(element) {
    if (confirm("Do you want to delete ?")) {
      this.http
        .get(`${this.main.URL}/reminder/deleteCalAlarm/${element._id}`)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            alert("Calendar alarm deleted");
            this.getCalAlarms();
          } else {
            alert("Calendar alarm not found");
          }
        });
    }
  }
}
