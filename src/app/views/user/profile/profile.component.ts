import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

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

  constructor(private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.user = this.sharedService.user || {};
          this.userId = this.user._id;
            this.username = this.user.username;
            this.email = this.user.email;
            this.fname = this.user.firstName;
            this.lname = this.user.lastName;
        }
      );
  }

  updateUser() {
    // console.log('user update requested');
    // console.log(this.fname + ' ' + this.profileForm.value.firstName);
    this.user.firstName = this.profileForm.value.fname;
    this.user.lastName = this.profileForm.value.lname;
    this.user.username = this.profileForm.value.username;
    this.user.email = this.profileForm.value.email;

    this.userService.updateUser(this.userId, this.user).subscribe((user: any) => {
      if (user) {
        alert('User Updated!');
      } else {
        alert('Something went wrong :(');
      }
    });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }


}
