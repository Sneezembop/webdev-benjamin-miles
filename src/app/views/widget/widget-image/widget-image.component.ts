import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css', '../../css/style.css']
})
export class WidgetImageComponent implements OnInit {
  @Input()
  widget: any;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl = environment.baseUrl;
  user: any;

  constructor(private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widget.pageId = this.pageId;
          this.widgetId = this.widget._id;
        }
      );
  }
  goToFlickr() {

    if (this.widget._id == null) {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((newwidget: any) => {
        this.router.navigate(
          ['/website', this.websiteId, 'page', this.pageId, 'widget', newwidget._id, 'flickr']);
      });
    } else {
      this.router.navigate(
        ['/website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id, 'flickr']);
    }}
}
