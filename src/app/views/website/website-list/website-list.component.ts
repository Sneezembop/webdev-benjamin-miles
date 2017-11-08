import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css',
    '../../css/style.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites = [{}];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteService.findWebsitesByUser(this.userId).subscribe((list: any) => {
            console.log('the following websites were returned to me:');
            console.log(list.toString());
            this.websites = list;
          });
        }
      );
  }
}

