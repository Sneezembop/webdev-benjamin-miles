import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css',
    '../../css/style.css']
})
export class WidgetNewComponent implements OnInit {
  @Input()
  widgetType: string;
  widget: any;
  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.widget.type = this.widgetType;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }

  createWidget() {
    this.widgetService.createWidget(this.pageId, this.widget);
    this.router.navigate(
      ['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
