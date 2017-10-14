import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
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


  createPage(userId, page) {
    page.developerId = userId;
    page._id = '' + Math.ceil((Math.random() * 1000));
    this.pages.push(page);
    return page;
  }

  findPagesByWebsiteId(websiteId) {
    const tempPageList = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {  tempPageList.push(this.pages[x]); }
    }
    return tempPageList;
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  return this.pages[x]; }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x]._id = page._id;
        this.pages[x].name = page.name;
        this.pages[x].websiteId = page.websiteId;
        this.pages[x].description = page.description;
        }
      }
    }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  this.pages.splice(x, 1); }
    }
  }
}
