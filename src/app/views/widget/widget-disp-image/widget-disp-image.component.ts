import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-disp-image',
  templateUrl: './widget-disp-image.component.html',
  styleUrls: ['./widget-disp-image.component.css', '../../css/style.css']
})
export class WidgetDispImageComponent implements OnInit {
  @Input()
  widget: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  cleanUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
  }
}
