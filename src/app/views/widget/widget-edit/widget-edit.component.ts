import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css', '../../css/style.css']
})
export class WidgetEditComponent implements OnInit {
  widget: any;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetType: string;
  widgetId: string;
  widgetReady = false;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.widgetReady = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId).subscribe((widget: any) => {
            this.widget = widget;
            this.widgetType = this.widget.type;
            this.widgetReady = true;
            // console.log(this.widgetType);
          });

        }
      );
  }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe((widget: any) => {
      this.router.navigate(
        ['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe((widget: any) => {
      this.router.navigate(
        ['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });
  }

}
