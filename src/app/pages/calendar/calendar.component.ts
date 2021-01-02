import { MainService } from "./../../services/main.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from "@angular/core";

import { isSameDay, isSameMonth } from "date-fns";
import { Subject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from "angular-calendar";

import { HttpClient } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { ViewEventComponent } from "app/models/view-event/view-event.component";

export interface DialogData {
  event: object;
}

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @ViewChild("addContent", { static: true }) addContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;
  start: any;
  end: any;
  eventName;
  eventDesc = "";
  eventAttendee = "";
  eventAllDay = false;
  contacts = new FormControl();
  eventsList: any;

  constructor(
    private modal: NgbModal,
    private http: HttpClient,
    private main: MainService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCalEvents();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  hourSegmentClicked(event) {
    const dts = new Date(event.date);
    this.start = event.date;
    const enddate = dts.setMinutes(dts.getMinutes() + 30);
    const ts = Number(enddate);
    this.end = new Date(ts);
    this.modal.open(this.addContent, { size: "lg" });
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.openDialog(event);
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  addNewEvent() {
    if (this.eventName) {
      const fd: FormData = new FormData();
      fd.append("start", this.start);
      fd.append("end", this.end);
      fd.append("eventName", this.eventName);
      fd.append("eventAttendee", localStorage.getItem("token"));
      fd.append("eventDesc", this.eventDesc);

      this.http
        .post(`${this.main.URL}/calendar/addEvent`, fd)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            alert("Event added");
            window.location.reload();
          }
        });
    } else {
      alert("Please enter event name");
    }
  }

  getCalEvents() {
    this.http
      .get(`${this.main.URL}/calendar/getAllEvents`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.eventsList = res["calendar"];
          for (let i = 0; i < this.eventsList.length; i++) {
            this.events.push({
              start: new Date(this.eventsList[i].start),
              end: new Date(this.eventsList[i].end),
              title: this.eventsList[i].name,
              color: this.eventsList[i].color,
              allDay: this.eventsList[i].allDay,
              id: this.eventsList[i]._id,
            });
          }
        }
      });
  }

  openDialog(event): void {
    const dialogRef = this.dialog.open(ViewEventComponent, {
      width: "760px",
      height: "90%",
      data: { event: event },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
