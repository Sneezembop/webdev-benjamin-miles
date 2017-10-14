import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css', '../../css/style.css']
})
export class WidgetEditComponent implements OnInit {
  widget: object;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType: string;
  widgetId: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widget = this.widgetService.findWidgetById(this.widgetId);
          this.widgetType = this.widget['type'];
        }
      );
  }

  updateWidget() {
  }

  deleteWidget() { }

}
