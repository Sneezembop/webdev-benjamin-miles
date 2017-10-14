import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css',
    '../../css/style.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') submitForm: NgForm;

  websiteId: string;
  errorFlag: boolean;
  errorMsg: string;
  pagename: string;
  description: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
        }
      );
  }

  createPage() {
    this.pagename = this.submitForm.value.pagename;
    this.description = this.submitForm.value.description;
    const tempPage = { _id: '123', name: this.pagename, websiteId: this.websiteId, description: this.description };
    this.pageService.createPage(this.websiteId, tempPage);
    this.router.navigate(['../page']);
  }
}
