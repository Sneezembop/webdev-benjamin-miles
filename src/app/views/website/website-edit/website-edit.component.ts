import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css', '../../css/style.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  userId: string;
  websiteId: string;
  errorFlag: boolean;
  errorMsg: string;
  webname: string;
  description: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          const website = this.websiteService.findWebsiteById(this.websiteId);
          this.webname = website.name;
          this.description = website.description;
        }
      );

  }

  updateWebsite() {
    this.webname = this.submitForm.value.webname;
    this.description = this.submitForm.value.description;
    const tempSite = {_id: this.websiteId, name: this.webname,
      developerId: this.userId, description: this.description};
    this.websiteService.updateWebsite(this.websiteId, tempSite);
    this.router.navigate(['../']);
  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['../']);
  }

}
