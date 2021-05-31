import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

interface test {
  a: number;
  b: number;
  c: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  svg: any;

  xScale: any;
  yScale: any;
  padding: number = 10;

  testA: test = {
    a: 50,
    b: 50,
    c: 50
  };

  ngOnInit(): void {
    this.initSvg();
    this.initAxis();
  }

  initSvg() {
    this.svg = d3.select('.demo').append('svg')
      .attr('width', 600)
      .attr('height', 600)
  }

  initAxis() {
    this.xScale = d3.scaleLinear().domain([-50, 50]).range([0 + this.padding, 600 - this.padding]);
    this.yScale = d3.scaleLinear().domain([50, -50]).range([0 + this.padding, 600 - this.padding]);
    this.svg.append('g')
      .attr('transform', 'translate('+ 0 +','+ this.yScale(0) +')')
      .call(d3.axisBottom(this.xScale));
    
    this.svg.append('g')
      .attr('transform', 'translate('+ this.xScale(0) +','+ 0 +')')
      .call(d3.axisLeft(this.yScale));
  }

  valueChange() {
    console.log(this.testA);
  }
}
