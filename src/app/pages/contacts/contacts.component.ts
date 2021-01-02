import { MainService } from "./../../services/main.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { MatTableDataSource } from "@angular/material/table";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  data = [];
  data2 = [{ url: "../../../assets/img/contacts-icon.png", name: "" }];

  page = 0;
  size = 12;

  public isMobile = false;
  dataSource;
  contactsList: any;

  constructor(
    private http: HttpClient,
    public main: MainService,
    breakpointObserver: BreakpointObserver,
    private _router: Router
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.http
      .get(`${this.main.URL}/contacts/getAllContacts`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.contactsList = res["contacts"];
          this.data2 = this.contactsList;
          this.data = this.contactsList;
          this.dataSource = new MatTableDataSource(this.data2);
          console.log(this.data2);
        }
      });
    this.getData({ pageIndex: this.page, pageSize: this.size });
    this.getContacts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.data = this.dataSource["filteredData"];
    this.data2 = this.dataSource["filteredData"];
  }

  getData(obj) {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }

  addContact() {
    this._router.navigate(["/add-contact"]);
  }

  getContacts() {
    this.http
      .get(`${this.main.URL}/contacts/getAllContacts`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.contactsList = res["contacts"];
          this.data2 = this.contactsList;
          this.dataSource = new MatTableDataSource(this.data2);
          console.log(this.data2);
        }
      });
  }

  editCust(id) {
    this._router.navigate([`/edit-contact/${id}`]);
  }
}
