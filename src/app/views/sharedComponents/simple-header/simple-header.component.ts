import {Component, Input, OnInit} from '@angular/core';
import {Route, RouterLink} from '@angular/router';



@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.css',
    '../../css/style.css']
})
export class SimpleHeaderComponent implements OnInit {
  @Input()
  headerName: string;

  @Input()
  okLink: string;

  @Input()
  glyphType: string;

  @Input()
  backLink: string;

  constructor() {
    this.headerName = 'test';
    this.okLink = '';
    this.glyphType = 'ok';
    this.backLink = '../';
  }

  ngOnInit() {}

}
