import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
    '../../css/style.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  vfpassword: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
  }

  register() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.vfpassword = this.loginForm.value.vfpassword;
    // console.log(this.username + ' ' + this.password);
    if (this.password === this.vfpassword) {

          const tempuser = {username: this.username, password: this.password,
            firstName: '', lastName: ''};
          this.userService.createUser(tempuser).subscribe((user: any) => {

            this.router.navigate(['/login']);
          });

        }
  }
}
