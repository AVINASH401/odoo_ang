import { Router } from "@angular/router";
import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpEventType, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-discuss",
  templateUrl: "./discuss.component.html",
  styleUrls: ["./discuss.component.css"],
})
export class DiscussComponent implements OnInit {
  typesOf1 = [];
  fileTypes = [];

  typesOfShoes: string[] = [
    "Boots",
    "Clogs",
    "Loafers",
    "Moccasins",
    "Sneakers",
  ];

  usersList: any;

  toggled = false;
  message = "";
  fileName: any;
  selUser;
  // selectedFiles: FileList;
  // progressInfos = [];
  // message1 = "";

  fileInfos: Observable<any>;
  receiverData: any;
  discussData: any;
  userId: any;

  constructor(
    public main: MainService,
    public http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit() {
    this.main.getCheck();
    this.getAllUsers();
    this.getUserIdByToken();
  }

  getUserIdByToken() {
    this.http
      .get(
        `${this.main.URL}/discuss/getUserIdByToken/${localStorage.getItem(
          "token"
        )}`
      )
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.userId = res["user"]["_id"];
          console.log("userId", this.userId);
        }
      });
  }

  getAllUsers() {
    this.http
      .get(
        `${this.main.URL}/discuss/getUsersList/${localStorage.getItem("token")}`
      )
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.usersList = res["users"];
        }
      });
  }

  userName(user) {
    console.log("Clicked", user);
    this.receiverData = user;
    const fd: FormData = new FormData();
    fd.append("token", localStorage.getItem("token"));
    fd.append("receiverId", this.receiverData._id);

    this.http
      .post(`${this.main.URL}/discuss/getDiscHistory`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.discussData = res["discuss"];
          console.log("Discuss Data : ", this.discussData);
        }
      });
  }

  sendNewMessage() {
    const fd: FormData = new FormData();
    fd.append("token", localStorage.getItem("token"));
    fd.append("message", this.message);
    fd.append("receiverId", this.receiverData._id);
    fd.append("receiverName", this.receiverData.name);

    for (let file of this.typesOf1) {
      fd.append("picture", file);
    }

    this.http
      .post(`${this.main.URL}/discuss/sendNewMessage`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          console.log("Res", res);
          window.location.reload();
        }
      });
  }

  handleSelection(event) {
    this.message += event.char;
  }

  importFile(event) {
    if (event.target.files.length === 0) {
      return;
    }
    const file: File = event.target.files[0];
    this.fileTypes.push(file.type);
    this.typesOf1.push(file);
    console.log("File type", this.fileTypes);
  }

  removeFile(name, i) {
    if (this.typesOf1[i].name === name) {
      this.fileTypes.splice(i, 1);
      this.typesOf1.splice(i, 1);
      console.log("File type", this.fileTypes);
    }
  }
}
