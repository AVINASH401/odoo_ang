import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DialogData } from "app/pages/calendar/calendar.component";
import { MainService } from "app/services/main.service";
import moment from "moment";

@Component({
  selector: "app-view-event",
  templateUrl: "./view-event.component.html",
  styleUrls: ["./view-event.component.css"],
})
export class ViewEventComponent implements OnInit {
  model;

  public selectedMoment = new Date();
  public dateTime: Date;

  eventData;
  eventName;
  contactList;
  event: any;
  eventId: any;
  eventAttendee;
  eventDuration;
  eventLoc;
  eventDesc;
  eventAllDay;
  startDate;
  endDate;
  startTime;
  endTime;
  contacts: FormControl = new FormControl();

  constructor(
    private http: HttpClient,
    private main: MainService,
    public dialogRef: MatDialogRef<ViewEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getAllContacts();
    this.eventData = this.data.event;
    this.eventName = this.eventData.title;
    this.eventId = this.data.event["id"];
    this.getEventById(this.eventId);
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

  getEventById(id) {
    this.http
      .get(`${this.main.URL}/calendar/getEventById/${id}`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.event = res["calendar"];
          this.eventAttendee = this.event.attendees;
          this.contacts = new FormControl(this.eventAttendee);
          this.eventDesc = this.event.description;
          this.eventLoc = this.event.location;
          this.eventDuration = this.event.duration;
          this.eventAllDay = this.event.allDay;
          this.startDate = moment(this.event.start).format("YYYY-MM-DD");
          this.endDate = moment(this.event.end).format("YYYY-MM-DD");
          const res1 = this.event.start.split(" ");
          const res2 = this.event.end.split(" ");
          this.startTime = res1[4];
          this.endTime = res2[4];
        }
      });
  }

  editEvent() {
    if (confirm("Do you want to update ?")) {
      const res1 = this.startTime.split(":");
      const res2 = this.endTime.split(":");
      let newStime;
      let newEtime;
      if (res1.length === 2) {
        newStime = `${this.startTime}:00`;
      } else {
        newStime = `${this.startTime}`;
      }

      if (res2.length === 2) {
        newEtime = `${this.endTime}:00`;
      } else {
        newEtime = `${this.endTime}`;
      }
      const tes1 = moment(this.startDate).format("llll").split(",");
      const tes2 = moment(this.endDate).format("llll").split(",");
      const set1 = moment(this.startDate).format("llll").split(" ");
      const set2 = moment(this.endDate).format("llll").split(" ");

      const newStartTime = `${tes1[0]}${tes1[1]} ${set1[3]} ${newStime} GMT+0530 (India Standard Time)`;
      const newEndTime = `${tes2[0]}${tes2[1]} ${set2[3]} ${newEtime} GMT+0530 (India Standard Time)`;

      const fd: FormData = new FormData();
      fd.append("eventId", this.event._id);
      fd.append("eventName", this.eventName);
      fd.append("contacts", JSON.stringify(this.contacts.value));
      fd.append("startDate", newStartTime);
      fd.append("endDate", newEndTime);
      fd.append("eventAllDay", this.eventAllDay);
      fd.append("eventDuration", this.eventDuration);
      fd.append("eventLoc", this.eventLoc);
      fd.append("eventDesc", this.eventDesc);

      this.http
        .post(`${this.main.URL}/calendar/editEvent`, fd)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            alert("Meeting updated");
            window.location.reload();
          }
        });
    }
  }

  deleteEvent() {
    if (confirm("Do you want to delete ?")) {
      const fd: FormData = new FormData();
      fd.append("eventId", this.event._id);
      this.http
        .post(`${this.main.URL}/calendar/deleteEvent`, fd)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            alert("Meeting deleted");
            window.location.reload();
          }
        });
    }
  }
}
