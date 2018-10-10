import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import {BehaviorSubject, Observable} from "rxjs/index";
import {DataSource} from "@angular/cdk/collections";


export interface FinacialInstitutions {
  organization: string;
  txn: number;
  saleslastweek: number;
  salesthismonth: number;
}

const ELEMENT_DATA: FinacialInstitutions[] = [
  {organization: 'People bank', txn: '45.00', saleslastweek: 54, salesthismonth: '894'},
  {organization: 'KCB bank', txn: '129.00', saleslastweek: 104, salesthismonth: '594'},
  {organization: 'Equity bank', txn: '230.00', saleslastweek: 45, salesthismonth: '320'},
  {organization: 'musoni bank', txn: '483.00', saleslastweek: 783, salesthismonth: '10473'},
  {organization: 'Total sales', txn: '45.00', saleslastweek: 54, salesthismonth: '894'},


];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent {


/* // Doughnut*/
  public doughnutChartLabels: string[] = ['Active', ' Inactive'];
  public doughnutChartData: number[] = [60,40 ];
  public doughnutChartType: string = 'doughnut';
  public doughnutBorderWidth: number = 10;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

 /* //  stacked barchart*/
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  public barChartLabels:string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [500, 150, 70, 250, 700, 450], label: 'Good Standing'},
    {data: [1500, 700, 550, 700, 700, 700], label: 'Agent of risk'},
    {data: [500, 950, 600, 1200, 1000, 1200], label: 'New Agent'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  /* //end of stacked barchart*/

   /* horizontal barchart*/
  public barHorizontalChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabelsHorizontal:string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'];
  public barChartTypeHorizontal:string = 'horizontalBar';
  public barChartLegendHorizontal:boolean = true;

  public barChartDataHorizontal:any[] = [
    {data: [500, 150, 70, 250, 700, 450], label: 'Done'},
    {data: [1500, 700, 550, 700, 700, 700], label: 'Working'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
