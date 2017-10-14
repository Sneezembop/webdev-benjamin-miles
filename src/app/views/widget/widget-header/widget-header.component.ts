import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css', '../../css/style.css']
})
export class WidgetHeaderComponent implements OnInit {
  @Input()
  widget: any;

  constructor() { }

  ngOnInit() {
  }

}
