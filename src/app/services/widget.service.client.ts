import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';


// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;


  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'reorderWidget': this.reorderWidget
  };

  reorderWidget(pageId, start, stop) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + start + '&final=' + stop;
    return this.http.put(url, null).map((response: Response) => {
      return response.json();
    });
  }

  createWidget(pageId, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetsByPageId(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(widgetId, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }



}
