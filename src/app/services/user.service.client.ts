import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';


// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http) {
  }

  api = {
     'createUser': this.createUser,
    'findUserById': this.findUserById,
     'findUserByUsername': this.findUserByUsername,
     'updateUser': this.updateUser,
     'deleteUser': this.deleteUser,
      'validateUser': this.validateUser
  };

  createUser(user: any) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    }); }

  findUserById(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    }); }

  findUserByUsername(username: string) {
    const url = 'http://localhost:3100/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    }); }

  updateUser(userId: string, user: any) {
    user.id = userId;
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    }); }

  deleteUser(userId: string) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    }); }


  validateUser(username: string, password: string) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
   // console.log(url);
    return this.http.get(url).map((response: Response) => {
      if (response.json() !== null) {
       // console.log('anything');
        return true;
      } else {
        return false;
      }
    });
  }




}





