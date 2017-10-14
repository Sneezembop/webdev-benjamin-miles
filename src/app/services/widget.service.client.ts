import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() {
  }

  widgets = [
    {_id: '123', type: 'HEADER', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', type: 'HEADER', pageId: '321', size: 4, text: 'Extra Header'},
    {
      _id: '345', type: 'IMAGE', pageId: '321', width: '100%',
      url: 'https://i.pinimg.com/736x/1b/15/ff/1b15ff0748697cc44048a0d84f5a2f93--rick-and-morty-fondos-rick-and-morty-fanart.jpg'
    },
    {_id: '456', type: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', type: 'HEADER', pageId: '321', size: 5, text: 'Other Header'},
    {
      _id: '678', type: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/embed/GI6CfKcMhjY'
    },
    {_id: '789', type: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget(pageId, widget) {
    widget.pageId = pageId;
    widget._id = '' + Math.ceil((Math.random() * 1000));
    this.widgets.push(widget);
    // console.log(this.widgetListToString(pageId));
    return widget;
  }

  findWidgetsByPageId(pageId) {
    const tempWidgetList = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        tempWidgetList.push(this.widgets[x]);
      }
    }
    return tempWidgetList;
  }

  findWidgetById(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1, widget);
      }
    }
  }

  deleteWidget(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }

  widgetListToString(pageId) {
    let myString = '';
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        myString += this.widgets[x]._id + ' ' + this.widgets[x].type + '\n';
      }
    }
    return myString;
  }

}
