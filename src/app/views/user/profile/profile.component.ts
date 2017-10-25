import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
    '../../css/style.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  // properties
  userId: string;
  user: any;
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
          this.userService.findUserById(this.userId).subscribe((user: any) => {
            this.user = user;
            this.username = user.username;
            this.email = user.email;
            this.fname = user.firstName;
            this.lname = user.lastName;
          });
        }
      );
  }

  updateUser() {

    // console.log(this.fname + ' ' + this.profileForm.value.firstName);
    this.user.firstName = this.fname;
    this.user.lastName = this.lname;
    this.user.username = this.username;
    this.user.email = this.email;

    this.userService.updateUser(this.userId, this.user).subscribe((user: any) => {
    });
  }

}
