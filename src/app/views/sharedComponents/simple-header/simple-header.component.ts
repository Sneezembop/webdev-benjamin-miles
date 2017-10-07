import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.css',
    '../../css/style.css']
})
export class SimpleHeaderComponent implements OnInit {
  @Input()
  headerName: string;
  okLink: string;

  constructor() {
    this.headerName = 'test';
    this.okLink = 'test';
  }

  ngOnInit() {}

}
