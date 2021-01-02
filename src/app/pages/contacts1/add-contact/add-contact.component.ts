import { MainService } from "./../../../services/main.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"],
})
export class AddContactComponent implements OnInit {
  imageURL: string;

  contType;
  name;
  email;
  phone;
  mobile;
  city;
  cityZone = "";
  state;
  selectTag = "";
  website;
  gstin;
  panNo;
  address;
  country;
  picture;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private main: MainService
  ) {}

  ngOnInit(): void {}

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.picture = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addContact() {
    const fd: FormData = new FormData();
    fd.append("cont_type", this.contType);
    fd.append("name", this.name);
    fd.append("email", this.email);
    fd.append("phone", this.phone);
    fd.append("mobile", this.mobile);
    fd.append("city", this.city);
    fd.append("city_zone", this.cityZone);
    fd.append("state", this.state);
    fd.append("tag", this.selectTag);
    fd.append("website", this.website);
    fd.append("gst_in", this.gstin);
    fd.append("pan_no", this.panNo);
    fd.append("address", this.address);
    fd.append("country", this.country);

    if (this.picture) {
      fd.append("picture", this.picture);
    }

    this.http
      .post(`${this.main.URL}/contacts/addContact`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          alert("Contact added");
          this._router.navigate([`/edit-contact/${res["contact"]._id}`]);
        }
      });
  }
}
