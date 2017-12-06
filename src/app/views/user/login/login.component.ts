import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../css/style.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  baseUrl = environment.baseUrl;


  constructor(private userService: UserService, private sharedService: SharedService, private router: Router) {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService
      .login(this.username, this.password)
      .subscribe((user) => {
        this.sharedService.user = user;
        //  console.log(user.password);
        this.router.navigate(['/profile']);
      });
  }


  login_old() {

    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    console.log('data', this.username);
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/profile']); },
        (error: any) => {
          console.log(error);
        }
      );
  }


  ngOnInit() {
    this.errorFlag = false;


  }

}
