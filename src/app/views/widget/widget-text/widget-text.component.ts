import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css', '../../css/style.css']
})
export class WidgetTextComponent implements OnInit {
@Input()
widget: any;
  constructor() { }

  ngOnInit() {
  }

}
