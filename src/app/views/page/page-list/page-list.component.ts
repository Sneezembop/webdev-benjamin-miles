import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css',
    '../../css/style.css']
})
export class PageListComponent implements OnInit {
  userId: String;
  websiteId: String;
  pages = [{}];
  user: any;

  constructor(private sharedService: SharedService, private pageService: PageService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.pageService.findPagesByWebsiteId(this.websiteId).subscribe((pages: any) => {
            this.pages = pages;
          });
        }
      );
  }
}
