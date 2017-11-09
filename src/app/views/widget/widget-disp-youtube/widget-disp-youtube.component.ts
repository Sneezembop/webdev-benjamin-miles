import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-disp-youtube',
  templateUrl: './widget-disp-youtube.component.html',
  styleUrls: ['./widget-disp-youtube.component.css', '../../css/style.css']
})
export class WidgetDispYoutubeComponent implements OnInit {
  @Input()
  widget: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {

  }

  cleanUrl() {
    this.widget.url = this.widget.url.replace('/watch?v=', '/embed/');

    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
  }

}
