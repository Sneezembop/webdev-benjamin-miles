import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.css',
    '../../css/style.css']
})
export class WidgetHomeComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [{}];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetService.findWidgetsByPageId(this.pageId).subscribe((widgets: any) => {
            this.widgets = widgets;
          });

        }
      );
  }

}
