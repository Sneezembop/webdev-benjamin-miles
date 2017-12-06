import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';


// injecting service into module
@Injectable()

export class UserService {
  options: RequestOptions = new RequestOptions();


  constructor(private router: Router, private sharedService: SharedService, private http: Http) {
  }

  baseUrl = environment.baseUrl;

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
    'validateUser': this.validateUser,
    'logout': this.logout,
    'login': this.login,
    'register': this.register,
    'loggedIn': this.loggedIn
  };

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }


  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      });
  }


  register(username, password) {
    const url = this.baseUrl + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username: String, password: String) {

    this.options.withCredentials = true; // jga

    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  createUser(user: any) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId: string, user: any) {
    user.id = userId;
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }


  validateUser(username: string, password: string) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    // console.log(url);
    return this.http.get(url).map((response: Response) => {
      if (response.json() !== null) {
        // console.log('anything');
        return false;
      } else {
        return true;
      }
    });
  }

}





