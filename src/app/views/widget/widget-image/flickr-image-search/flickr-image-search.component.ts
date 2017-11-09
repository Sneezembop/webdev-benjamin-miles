import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  searchText: string;



  constructor() { }

  ngOnInit() {
  }

  searchPhotos() {
    console.log('not hooked up yet');
  }
}

