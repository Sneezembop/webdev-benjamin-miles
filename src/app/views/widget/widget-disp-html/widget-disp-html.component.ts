import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-widget-disp-html',
  templateUrl: './widget-disp-html.component.html',
  styleUrls: ['./widget-disp-html.component.css', '../../css/style.css']
})
export class WidgetDispHtmlComponent implements OnInit {
  @Input()
  widget: any;

  @ViewChild('htmlDisplay') htmlDisplay: ElementRef;

  constructor() { }

  ngOnInit() {
    this.htmlDisplay.nativeElement.innerHTML = this.widget.text;

  }

}
