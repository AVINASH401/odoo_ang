import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reporting",
  templateUrl: "./reporting.component.html",
  styleUrls: ["./reporting.component.css"],
})
export class ReportingComponent implements OnInit {
  showLine = true;
  showBar = false;
  showPie = false;

  public chartType1: string = "line";

  public chartDatasets1: Array<any> = [
    {
      data: [10, 50, 40, 28, 48, 40, 19, 86, 27, 90],
      label: "My Second dataset",
    },
  ];

  public chartType2: string = "bar";
  public chartDatasets2: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "My First dataset" },
  ];

  public chartType3: string = "pie";
  public chartDatasets3: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: "My First dataset" },
  ];

  public chartLabels: Array<any> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "sep",
    "oct",
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: "rgba(0, 137, 132, .2)",
      borderColor: "rgba(0, 10, 130, .7)",
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };

  public chartLabels1: Array<any> = [
    "Red",
    "Green",
    "Yellow",
    "Grey",
    "Dark Grey",
  ];

  public chartColors1: Array<any> = [
    {
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
      ],
      borderWidth: 2,
    },
  ];

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor() {}

  ngOnInit() {}

  lineShow() {
    this.showLine = true;
    this.showBar = false;
    this.showPie = false;
  }

  barShow() {
    this.showLine = false;
    this.showBar = true;
    this.showPie = false;
  }

  pieShow() {
    this.showLine = false;
    this.showBar = false;
    this.showPie = true;
  }
}
