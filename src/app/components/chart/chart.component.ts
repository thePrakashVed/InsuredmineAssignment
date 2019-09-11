import { ChartapiService } from './../../services/chartapi.service';
import { Component, OnInit } from '@angular/core';
declare var Chart: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  purple_orange_gradient;
  public barchartColor: any[];
  public barChartOptions: any;
  public lineChartOptions: any;
  public barChartLabels: string[];
  public lineChartLabels: string[];
  public barChartType: string;
  public lineChartType: string = "line";
  public barChartLegend: boolean = false;
  public lineChartLegend: boolean = false;
  public listOfYear: string[];
  selectedMonth;
  selectedYear;
  noOfDays;
  momentInstance;
  chart_ins;
  showLineChartImage = false;
  public chartColors: Array<any>;

  tableData: any;

  public barChartData: any[];
  public lineChartData: any[];
  public sideMenuOpen = false;
  constructor(private chartapiService: ChartapiService) {
    this.chartapiService.getChartData().subscribe((data)=> {
      this.tableData = data;
    })
  }

  ngOnInit() {
    const canvas: any = document.getElementById("cases-chart");
    const bar_ctx = canvas.getContext("2d");
    this.chart_ins = bar_ctx;
    this.purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 400);
    this.purple_orange_gradient.addColorStop(0, "#30E4E2");
    this.purple_orange_gradient.addColorStop(1, "#45E994");
    Chart.defaults.global.defaultFontFamily = "'CorpoS'";
    this.initLineChart();
  }
  initLineChart() {
    this.barChartType = "line";
    this.initLineChartOption();
    this.initLineChartLabels();
    this.initLineChartData();
    this.initLineChartLabels();
    this.initLineChartColor();
  }
  
  initLineChartData() {
    this.listOfYear = ["2013", "2014", "2015", "2016", "2017", "2018"];
    this.lineChartData = [
      {
        data: [15, 20, 25, 18, 20, 25, 30],
        label: "Series A",
        fill: false,
        borderWidth: 2
      },
      {
        data: [65, 25, 80, 81, 56, 55, 40],
        label: "Series B",
        fill: false,
        borderWidth: 2
      },
      {
        data: [28, 25, 40, 19, 86, 27, 90],
        label: "Series C",
        fill: false,
        borderWidth: 2
      },
      ];
  }
  initLineChartLabels() {
    this.lineChartLabels = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];
  }
  initLineChartOption() {
    this.lineChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      events: [],

      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Event count",
              fontColor: "#000000",
              fontSize: "30"
            },
            stacked: true,
            ticks: {
              fontColor: "#000000",
              fontSize: "30",
              stepSize: 5,
              autoSkip: true,
              min: 0, // it is for ignoring negative step.
              beginAtZero: true,
              steps: 5,
              stepValue: 5,
              padding: 10, // padding to the y axis point
              fontFamily: "CorpoS"
            },
            afterTickToLabelConversion: function(data) {
              const xLabels = data.ticks;

              xLabels.forEach(function(labels, i) {
                if (i % 2 === 1) {
                  xLabels[i] = "";
                }
              });
            }
          }
        ],
        xAxes: [
          {
            // gridLines: {
            //   offsetGridLines: true,
            //   // color: 'rgba(0, 0, 0, 0)'
            //   display: false,
            //   color: "rgba(255, 255, 255, 0.05)",
            //   borderWidth: 1
            //   // drawBorder: false
            // },
            scaleLabel: {
              display: true,
              labelString: "Title of campaign",
              fontColor: "#000000",
              fontSize: "30"
            },
            // ticks: {
            //   fontColor: "#000000",
            //   fontSize: "30 ",
            //   fontFamily: "CorpoS"
            // }
          }
        ],
        // legend: {
        //   display: true,
        //   fontFamily: "CorpoS",
        //   labels: {
        //     padding: 0,
        //     boxWidth: 0
        //   }
        // }
      }
    };
  }
  initLineChartColor() {
    this.chartColors = [
      {
        borderColor: "#BBE774",
        backgroundColor: "green",
        pointBackgroundColor: "#BBE774",
        pointBorderColor: "blue,"
      }
    ];
  }
}
