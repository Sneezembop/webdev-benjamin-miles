import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-landscape-header',
  templateUrl: './landscape-header.component.html',
  styleUrls: ['./landscape-header.component.css']
})
export class LandscapeHeaderComponent implements OnInit {
  @Input()
  mainHeader: string;
  @Input()
  subHeader: string;

  @ViewChild('f') submitForm: NgForm;

  constructor() {
    this.mainHeader = 'test';
    this.subHeader = 'subtest';
  }

  ngOnInit() {
  }

}
