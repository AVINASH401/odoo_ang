import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { HttpClient } from "@angular/common/http";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "email",
    "language",
    "notifyBy",
    "action",
  ];

  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private http: HttpClient,
    private main: MainService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get(`${this.main.URL}/user/getAllUsers`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          console.log(res);
          this.dataSource = new MatTableDataSource(res["users"]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser() {
    this._router.navigate(["/add-user"]);
  }
}
