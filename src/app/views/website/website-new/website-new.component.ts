import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css', '../../css/style.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  userId: string;
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
        }
      );
  }

  createWebsite() {
    this.webname = this.submitForm.value.webname;
    this.description = this.submitForm.value.description;
    const tempSite = {name: this.webname, developerId: this.userId, description: this.description};
    this.websiteService.createWebsite(this.userId, tempSite).subscribe((site: any) => {
      this.router.navigate(['/user', this.userId, 'website']);
    });
  }

}
