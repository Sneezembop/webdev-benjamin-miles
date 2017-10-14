import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css', '../../css/style.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @Input()
  widget: any;
  constructor() { }

  ngOnInit() {
  }

}
