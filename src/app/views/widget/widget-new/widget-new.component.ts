import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {SharedService} from '../../../services/shared.service.client';

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
  user: any;
  errorMsg: string;
  errorFlag: boolean;

  constructor(private sharedService: SharedService,
              private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.widget = {};
    this.widget.type = 'HEADER';
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widget.pageId = this.pageId;
          this.widget.name = '';
        }
      );
  }

  createWidget() {
    if ((this.widget.name !== '') && (this.widget.name !== null)) {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((widget: any) => {
        this.router.navigate(
          ['/website', this.websiteId, 'page', this.pageId, 'widget']);
      });
    } else {
      this.errorMsg = 'needs a name!';
      this.errorFlag = true;
    }

  }
}
