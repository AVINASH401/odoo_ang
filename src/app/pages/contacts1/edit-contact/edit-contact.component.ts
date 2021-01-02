import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MainService } from "app/services/main.service";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.css"],
})
export class EditContactComponent implements OnInit {
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
  cust_id: any;
  custData: any;

  constructor(
    private http: HttpClient,
    private _router: Router,
    private main: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.cust_id = res.id;
      this.getCustomer(this.cust_id);
    });
  }

  getCustomer(id) {
    this.http
      .get(`${this.main.URL}/contacts/getContactById/${id}`)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          this.custData = res["contact"];
          this.imageURL = `${this.main.URL}/${this.custData.picture}`;
          this.contType = this.custData.cont_type;
          this.name = this.custData.name;
          this.email = this.custData.email;
          this.phone = this.custData.phone;
          this.mobile = this.custData.mobile;
          this.city = this.custData.city;
          this.cityZone = this.custData.city_zone;
          this.state = this.custData.state;
          this.selectTag = this.custData.tag;
          this.website = this.custData.website;
          this.gstin = this.custData.gst_in;
          this.panNo = this.custData.pan_no;
          this.address = this.custData.address;
          this.country = this.custData.country;
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

  editContact() {
    const fd: FormData = new FormData();
    fd.append("id", this.cust_id);
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
      .post(`${this.main.URL}/contacts/updateContact`, fd)
      .subscribe((res: any[]) => {
        if (res["status"] === "success") {
          alert("Contact updated");
          this._router.navigate([`/edit-contact/${res["contact"]._id}`]);
        }
      });
  }
}
