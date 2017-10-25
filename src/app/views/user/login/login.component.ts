import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';


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


  constructor(private userService: UserService, private router: Router) {
  }

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;


    if (this.userService.validateUser(this.username, this.password)) {
      this.userService.findUserByUsername(this.username).subscribe((user: any) => {
      this.router.navigate(['user/', user._id]);
      });
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
    this.errorFlag = false;


  }

}
