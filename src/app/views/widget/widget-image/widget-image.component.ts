import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widget.pageId = this.pageId;
        }
      );
  }

  uploadFile() {
    console.log('file not uploaded because no one hooked this up.');
  }
  goToFlickr() {
    console.log(this.widget._id);
    if (this.widget._id == null) {
      this.widgetService.createWidget(this.pageId, this.widget).subscribe((newwidget: any) => {
        this.router.navigate(
          ['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newwidget._id, 'flickr']);
      });
    } else {
      this.router.navigate(
        ['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widget._id, 'flickr']);
    }

    console.log('attempting to flickr');
  }
}
