import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-disp-html',
  templateUrl: './widget-disp-html.component.html',
  styleUrls: ['./widget-disp-html.component.css', '../../css/style.css']
})
export class WidgetDispHtmlComponent implements OnInit {
  @Input()
  widget: any;

  constructor() { }

  ngOnInit() {
  }

}
