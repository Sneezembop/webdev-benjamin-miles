import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css', '../../css/style.css']
})
export class WidgetImageComponent implements OnInit {
  @Input()
  widget: any;

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    console.log('file not uploaded because no one hooked this up.');
  }
}
