import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../css/style.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  login(username: string, password: string) {
    alert('username: ' + username);
  }

  ngOnInit() {



  }

}
