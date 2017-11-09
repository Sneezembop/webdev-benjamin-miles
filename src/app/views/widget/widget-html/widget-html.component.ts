import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css', '../../css/style.css']
})
export class WidgetHtmlComponent implements OnInit {
  @Input()
  widget: any;

  constructor() { }

  ngOnInit() {
  }

}
