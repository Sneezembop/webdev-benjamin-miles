import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css',
    '../../css/style.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  userId: string;
  websiteId: string;
  pageId: string;
  errorFlag: boolean;
  errorMsg: string;
  pagename: string;
  description: string;
  user: any;

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute,
              private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.pageService.findPageById(this.pageId).subscribe((page: any) => {
            this.pagename = page.name;
            this.description = page.description;
          });
        }
      );

  }

  updatePage() {
    if ((this.submitForm.value.pagename !== '') && (this.submitForm.value.pagename !== null)) {
      this.pagename = this.submitForm.value.webname;
      this.description = this.submitForm.value.description;
      const tempPage = {
        _id: this.pageId, name: this.pagename,
        websiteId: this.websiteId, description: this.description
      };
      this.pageService.updatePage(this.pageId, tempPage).subscribe((page: any) => {
        this.router.navigate(['/website', this.websiteId, 'page']);
      });
    }else {
        this.errorFlag = true;
        this.errorMsg = 'needs a name!';
    }
  }
  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe((page: any) => {
      this.router.navigate(['/website', this.websiteId, 'page']);
    });

  }
}
