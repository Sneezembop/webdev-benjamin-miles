import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../services/flickr.service.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css', '../../../css/style.css']
})
export class FlickrImageSearchComponent implements OnInit {
  searchText: string;
  photos = [];
  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  widget: any;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private flickrService: FlickrService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId).subscribe((widget: any) => {
            this.widget = widget;
          });
  });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );

  }
  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe( (widget: any) => {
      this.widget = widget;
      console.log('picture updated!');
    });

    }

  }


