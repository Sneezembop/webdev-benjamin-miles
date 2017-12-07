import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css', '../../css/style.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;
  user: any;
  userId: string;
  errorFlag: boolean;
  errorMsg: string;
  webname: string;
  description: string;

  constructor(private sharedService: SharedService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
        }
      );
  }

  createWebsite() {
    if ((this.submitForm.value.webname !== '') && (this.submitForm.value.webname !== null)) {
      this.webname = this.submitForm.value.webname;
      this.description = this.submitForm.value.description;
      const tempSite = {name: this.webname, developerId: this.userId, description: this.description};
      this.websiteService.createWebsite(this.userId, tempSite).subscribe((site: any) => {
        this.router.navigate(['/website']);
      });
    } else {
      this.errorFlag = true;
      this.errorMsg = 'needs a name!';
    }
  }

}
