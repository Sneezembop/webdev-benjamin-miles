import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.css',
    '../../css/style.css']
})
export class SimpleFooterComponent implements OnInit {
  @Input()
  profileLink: string;
  constructor() {
    this.profileLink = '../';
  }

  ngOnInit() {
  }

}
