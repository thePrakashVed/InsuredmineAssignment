import { Component, OnInit } from '@angular/core';
import { ChartapiService } from './services/chartapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chartAssignment';
  constructor(private chartapiService: ChartapiService) {

  }
  ngOnInit() {
  }
}
