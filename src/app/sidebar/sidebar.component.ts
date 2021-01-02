import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  { path: "/discuss", title: "Discuss", icon: "nc-chat-33", class: "" },
  {
    path: "/site-aquisition",
    title: "Site-Aquisition",
    icon: "nc-world-2",
    class: "",
  },
  { path: "/calendar", title: "Calendar", icon: "nc-calendar-60", class: "" },
  {
    path: "/contacts",
    title: "Contacts",
    icon: "nc-bullet-list-67",
    class: "",
  },
  { path: "/crm", title: "CRM", icon: "nc-badge", class: "" },
  { path: "/sales", title: "Sales", icon: "nc-chart-bar-32", class: "" },

  {
    path: "/reporting",
    title: "Reporting",
    icon: "nc-pin-3",
    class: "",
  },

  // {
  //   path: "/site-location",
  //   title: "Site Location",
  //   icon: "nc-pin-3",
  //   class: "",
  // },
  { path: "/reminders", title: "Reminders", icon: "nc-bell-55", class: "" },
  { path: "/purchase", title: "Purchase", icon: "nc-cart-simple", class: "" },
  {
    path: "/invoicing",
    title: "Invoicing",
    icon: "nc-single-copy-04",
    class: "",
  },
  {
    path: "/settings",
    title: "Settings",
    icon: "nc-settings-gear-65",
    class: "",
  },

  // { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  // { path: "/maps", title: "Maps", icon: "nc-pin-3", class: "" },
  // {
  //   path: "/notifications",
  //   title: "notifications",
  //   icon: "nc-bell-55",
  //   class: "",
  // },
  // { path: "/user", title: "user", icon: "nc-single-02", class: "" },
  // { path: "/table", title: "table", icon: "nc-tile-56", class: "" },
  // {
  //   path: "/typography",
  //   title: "typography",
  //   icon: "nc-caps-small",
  //   class: "",
  // },

  // {
  //   path: "/upgrade",
  //   title: "upgrade",
  //   icon: "nc-spaceship",
  //   class: "active-pro",
  // },
];

@Component({
  moduleId: module.id,
  // tslint:disable-next-line: component-selector
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
