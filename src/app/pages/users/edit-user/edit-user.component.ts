import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "./../../../services/main.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"],
})
export class EditUserComponent implements OnInit {
  imageURL: string;

  name;
  email;
  notifyBy;
  htmlContent; //signature
  aDashboard;
  aDiscuss;
  aSiteAcq;
  aCalendar;
  aContacts;
  aCrm;
  aSales;
  aSiteLoc;
  aReminders;
  aPurchase;
  aInvoicing;
  aSettings;
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

  user_id;
  userData: any;

  constructor(
    private http: HttpClient,
    private main: MainService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.user_id = res.id;
      this.getUserById(this.user_id);
    });
  }

  getUserById(id) {
    this.http
      .get(`${this.main.URL}/user/getUserById/${id}`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.userData = res["user"];
          this.name = this.userData.name;
          this.email = this.userData.email;
          this.notifyBy = this.userData.notifyBy;
          this.htmlContent = this.userData.signature;
          this.aDashboard = this.userData.accessRights.dashboard;
          this.aDiscuss = this.userData.accessRights.discuss;
          this.aSiteAcq = this.userData.accessRights.siteAcq;
          this.aCalendar = this.userData.accessRights.calendar;
          this.aContacts = this.userData.accessRights.contacts;
          this.aCrm = this.userData.accessRights.crm;
          this.aSales = this.userData.accessRights.sales;
          this.aSiteLoc = this.userData.accessRights.siteLoc;
          this.aReminders = this.userData.accessRights.reminders;
          this.aPurchase = this.userData.accessRights.purchase;
          this.aInvoicing = this.userData.accessRights.invoicing;
          this.aSettings = this.userData.accessRights.settings;
          this.imageURL = `${this.main.URL}/${this.userData.picture}`;
        }
      });
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.picture = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  updateUser() {
    if (confirm("Do you want to update ?")) {
      const fd: FormData = new FormData();
      fd.append("id", this.user_id);
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
        .post(`${this.main.URL}/user/updateUser`, fd)
        .subscribe((res: any[]) => {
          if (res["status"] === "success") {
            alert("User updated");
            this._router.navigate([`/edit-user/${res["user"]._id}`]);
          }
        });
    }
  }
}
