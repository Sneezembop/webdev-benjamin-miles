import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css',
    '../../css/style.css']
})
export class WebsiteListComponent implements OnInit {
  user: any;
  userId: String;
  websites = [{}];

  constructor(private sharedService: SharedService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteService.findWebsitesByUser(this.userId).subscribe((list: any) => {
            this.websites = list;
          });
        }
      );
  }
}

