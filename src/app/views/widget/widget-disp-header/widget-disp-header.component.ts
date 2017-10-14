import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-disp-header',
  templateUrl: './widget-disp-header.component.html',
  styleUrls: ['./widget-disp-header.component.css',
    '../../css/style.css']
})
export class WidgetDispHeaderComponent implements OnInit {
  @Input()
  widget: any;
  constructor() { }

  ngOnInit() {
  }

}
