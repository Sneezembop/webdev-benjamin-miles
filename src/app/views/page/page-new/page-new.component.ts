import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css',
    '../../css/style.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  websiteId: string;
  userId: string;
  errorFlag: boolean;
  errorMsg: string;
  pagename: string;
  description: string;
  user: any;

  constructor(private sharedService: SharedService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
        }
      );
  }

  createPage() {
    if ((this.submitForm.value.pagename !== '') && (this.submitForm.value.pagename !== null)) {
      this.pagename = this.submitForm.value.pagename;
      this.description = this.submitForm.value.description;
      const tempPage = { name: this.pagename, websiteId: this.websiteId, description: this.description };
      this.pageService.createPage(this.websiteId, tempPage).subscribe((page: any) => {
        this.router.navigate(['/website', this.websiteId, 'page']);
      });
    } else {
      this.errorFlag = true;
      this.errorMsg = 'needs a name!';
    }

  }
}
