import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
    '../../css/style.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  username: string;
  email: string;
  fname: string;
  lname: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.user = this.userService.findUserById(this.userId);

    this.username = this.user['username'];
    this.email = 'nothing@nothing.org';
    this.fname = this.user['firstName'];
    this.lname = this.user['lastName'];


  }

}
