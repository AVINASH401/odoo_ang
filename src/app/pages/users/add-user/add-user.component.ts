import { Router } from "@angular/router";
import { MainService } from "./../../../services/main.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  imageURL: string;

  name;
  email;
  notifyBy = "odoo";
  htmlContent = ""; //signature
  aDashboard = "all";
  aDiscuss = "all";
  aSiteAcq = "all";
  aCalendar = "all";
  aContacts = "all";
  aCrm = "all";
  aSales = "all";
  aSiteLoc = "all";
  aReminders = "all";
  aPurchase = "all";
  aInvoicing = "all";
  aSettings = "all";
  picture;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    width: "auto",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    defaultParagraphSeparator: "p",
    defaultFontName: "Arial",
    toolbarHiddenButtons: [["bold"]],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };

  constructor(
    private http: HttpClient,
    private main: MainService,
    private _router: Router
  ) {}

  ngOnInit() {}

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.picture = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addUser() {
    const fd: FormData = new FormData();
    fd.append("name", this.name);
    fd.append("email", this.email);
    fd.append("notifyBy", this.notifyBy);
    fd.append("signature", this.htmlContent);
    fd.append("aDashboard", this.aDashboard);
    fd.append("aDiscuss", this.aDiscuss);
    fd.append("aSiteAcq", this.aSiteAcq);
    fd.append("aCalendar", this.aCalendar);
    fd.append("aContacts", this.aContacts);
    fd.append("aCrm", this.aCrm);
    fd.append("aSales", this.aSales);
    fd.append("aSiteLoc", this.aSiteLoc);
    fd.append("aReminders", this.aReminders);
    fd.append("aPurchase", this.aPurchase);
    fd.append("aInvoicing", this.aInvoicing);
    fd.append("aSettings", this.aSettings);

    if (this.picture) {
      fd.append("picture", this.picture);
    }

    this.http
      .post(`${this.main.URL}/user/userRegistration`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          alert("User added");
          this._router.navigate([`/edit-user/${res["newUser"]._id}`]);
        }
      });
  }
}
