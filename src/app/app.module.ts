import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { MatRadioModule } from "@angular/material/radio";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { ChartsModule, WavesModule } from "angular-bootstrap-md";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { DiscussComponent } from "./pages/discuss/discuss.component";
import { SiteAquisitionComponent } from "./pages/site-aquisition/site-aquisition.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { CrmComponent } from "./pages/crm/crm.component";
import { SalesComponent } from "./pages/sales/sales.component";
import { SiteLocationComponent } from "./pages/site-location/site-location.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { RemindersComponent } from "./pages/reminders/reminders.component";
import { PurchaseComponent } from "./pages/purchase/purchase.component";
import { InvoicingComponent } from "./pages/invoicing/invoicing.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { ViewEventComponent } from "./models/view-event/view-event.component";
import { AddUserComponent } from "./pages/users/add-user/add-user.component";
import { EditUserComponent } from "./pages/users/edit-user/edit-user.component";
import { AddContactComponent } from "./pages/contacts1/add-contact/add-contact.component";
import { EditContactComponent } from "./pages/contacts1/edit-contact/edit-contact.component";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgxEmojiPickerModule } from "ngx-emoji-picker";

import { MainService } from "./services/main.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserModule } from "@angular/platform-browser";
import { CalendarAlarmComponent } from "./pages/calendar-alarm/calendar-alarm.component";
import { AddReminderComponent } from "./pages/reminders1/add-reminder/add-reminder.component";
import { EditReminderComponent } from "./pages/reminders1/edit-reminder/edit-reminder.component";
import { AddSitelocationComponent } from "./pages/sales 1/add-sitelocation/add-sitelocation.component";
import { EditSitelocationComponent } from "./pages/sales 1/edit-sitelocation/edit-sitelocation.component";
import { ReportingComponent } from "./pages/reporting/reporting.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DiscussComponent,
    SiteAquisitionComponent,
    CalendarComponent,
    ContactsComponent,
    CrmComponent,
    SalesComponent,
    SiteLocationComponent,
    RemindersComponent,
    PurchaseComponent,
    InvoicingComponent,
    SettingsComponent,
    AddUserComponent,
    EditUserComponent,
    AddContactComponent,
    EditContactComponent,
    LoginComponent,
    RegisterComponent,
    ViewEventComponent,
    CalendarAlarmComponent,
    AddReminderComponent,
    EditReminderComponent,
    AddSitelocationComponent,
    EditSitelocationComponent,
    ReportingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartsModule,
    WavesModule,
    NgbModalModule,
    MatStepperModule,
    MatButtonToggleModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxEmojiPickerModule,
  ],
  providers: [
    MatDatepickerModule,
    MainService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ViewEventComponent],
  exports: [CalendarComponent],
})
export class AppModule {}
