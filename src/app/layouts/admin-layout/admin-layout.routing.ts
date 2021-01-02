import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { DiscussComponent } from "app/pages/discuss/discuss.component";
import { SiteAquisitionComponent } from "app/pages/site-aquisition/site-aquisition.component";
import { CalendarComponent } from "app/pages/calendar/calendar.component";
import { ContactsComponent } from "app/pages/contacts/contacts.component";
import { CrmComponent } from "app/pages/crm/crm.component";
import { SiteLocationComponent } from "app/pages/site-location/site-location.component";
import { RemindersComponent } from "app/pages/reminders/reminders.component";
import { PurchaseComponent } from "app/pages/purchase/purchase.component";
import { InvoicingComponent } from "app/pages/invoicing/invoicing.component";
import { SettingsComponent } from "app/pages/settings/settings.component";
import { SalesComponent } from "app/pages/sales/sales.component";

import { AddUserComponent } from "app/pages/users/add-user/add-user.component";
import { EditUserComponent } from "app/pages/users/edit-user/edit-user.component";
import { AddContactComponent } from "app/pages/contacts1/add-contact/add-contact.component";
import { EditContactComponent } from "app/pages/contacts1/edit-contact/edit-contact.component";
import { CalendarAlarmComponent } from "app/pages/calendar-alarm/calendar-alarm.component";
import { AddReminderComponent } from "app/pages/reminders1/add-reminder/add-reminder.component";
import { EditReminderComponent } from "app/pages/reminders1/edit-reminder/edit-reminder.component";
import { AddSitelocationComponent } from "app/pages/sales 1/add-sitelocation/add-sitelocation.component";
import { EditSitelocationComponent } from "app/pages/sales 1/edit-sitelocation/edit-sitelocation.component";
import { ReportingComponent } from "app/pages/reporting/reporting.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "discuss", component: DiscussComponent },
  { path: "site-aquisition", component: SiteAquisitionComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "crm", component: CrmComponent },
  { path: "sales", component: SalesComponent },
  { path: "site-location", component: SiteLocationComponent },
  { path: "reminders", component: RemindersComponent },
  { path: "purchase", component: PurchaseComponent },
  { path: "invoicing", component: InvoicingComponent },
  { path: "settings", component: SettingsComponent },

  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:id", component: EditUserComponent },

  { path: "add-contact", component: AddContactComponent },
  { path: "edit-contact/:id", component: EditContactComponent },

  { path: "calendar-alarm", component: CalendarAlarmComponent },

  { path: "add-reminder", component: AddReminderComponent },
  { path: "edit-reminder/:id", component: EditReminderComponent },

  { path: "add-site-location", component: AddSitelocationComponent },
  { path: "edit-site-location/:id", component: EditSitelocationComponent },

  { path: "reporting", component: ReportingComponent },
];
