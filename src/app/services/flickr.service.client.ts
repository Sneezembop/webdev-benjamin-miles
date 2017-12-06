import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';



// injecting service into module
@Injectable()

export class FlickrService {

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;

  api = {
    'searchPhotos': this.searchPhotos
  };

  key = '7e01cffac2224b8c92b7f9e525cf93eb';
  secret = '33c330d555c58b78';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT&safe_search=1';


  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }


}
