import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css', '../../css/style.css']
})
export class WidgetChooserComponent implements OnInit {
  @Input()
    widget: any;
  user: any;
  userId: string;
  websiteId: string;
  pageId: string;


  constructor(private sharedService: SharedService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }

  navigateToNew(widgetType: string) {
    this.widget.type = widgetType;
    console.log(widgetType);
  }

}
