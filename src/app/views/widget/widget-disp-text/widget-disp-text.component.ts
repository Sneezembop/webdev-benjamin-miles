import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-disp-text',
  templateUrl: './widget-disp-text.component.html',
  styleUrls: ['./widget-disp-text.component.css' , '../../css/style.css']
})
export class WidgetDispTextComponent implements OnInit {
@Input()
widget: any;

  constructor() { }

  ngOnInit() {
  }

}
