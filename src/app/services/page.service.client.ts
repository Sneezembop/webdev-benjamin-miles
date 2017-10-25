import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {
  }

  pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' },
    { _id: '23423', name: 'Page 1', websiteId: '890', description: 'Lorem' },
    { _id: '12132', name: 'Page 2', websiteId: '890', description: 'Lorem' },
    { _id: '11111', name: 'Page 3', websiteId: '890', description: 'Lorem' }
  ];

  api = {
    'createPage': this.createPage,
    'findPagesByWebsiteId': this.findPagesByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };


  createPage(websiteId, page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }

  findPagesByWebsiteId(websiteId) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPageById(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(pageId, page) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });
    }

  deletePage(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
