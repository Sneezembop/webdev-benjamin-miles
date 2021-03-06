import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css', '../../css/style.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  user: any;
  userId: string;
  websiteId: string;
  errorFlag: boolean;
  errorMsg: string;
  webname: string;
  description: string;

  constructor(private sharedService: SharedService, private router: Router,
              private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.websiteService.findWebsiteById(this.websiteId).subscribe((website: any) => {
            this.webname = website.name;
            this.description = website.description;
          });

        }
      );

  }

  updateWebsite() {
    if ((this.submitForm.value.webname !== '') && (this.submitForm.value.webname !== null)) {
      this.webname = this.submitForm.value.webname;
      this.description = this.submitForm.value.description;
      const tempSite = {
        _id: this.websiteId, name: this.webname,
        developerId: this.userId, description: this.description
      };
      this.websiteService.updateWebsite(this.websiteId, tempSite).subscribe((website: any) => {
        this.router.navigate(['/website']);
      });
    } else {
      this.errorMsg = 'needs a name';
      this.errorFlag = true;
    }

  }
  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId).subscribe((website: any) => {
      this.router.navigate(['/website']);
    });
  }

}
