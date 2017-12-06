import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {SimpleHeaderComponent} from './views/sharedComponents/simple-header/simple-header.component';
import {SimpleFooterComponent} from './views/sharedComponents/simple-footer/simple-footer.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteHomeComponent} from './views/website/website-home/website-home.component';
import {LandscapeHeaderComponent} from './views/sharedComponents/landscape-header/landscape-header.component';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import {FlickrService} from './services/flickr.service.client';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageHomeComponent} from './views/page/page-home/page-home.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {WidgetHomeComponent} from './views/widget/widget-home/widget-home.component';
import {WidgetNewComponent} from './views/widget/widget-new/widget-new.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './views/widget/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-youtube/widget-youtube.component';
import {WidgetDispHeaderComponent} from './views/widget/widget-disp-header/widget-disp-header.component';
import {WidgetDispYoutubeComponent} from './views/widget/widget-disp-youtube/widget-disp-youtube.component';
import {WidgetDispImageComponent} from './views/widget/widget-disp-image/widget-disp-image.component';
import {WidgetDispHtmlComponent} from './views/widget/widget-disp-html/widget-disp-html.component';
import {WidgetDispTextComponent} from './views/widget/widget-disp-text/widget-disp-text.component';
import {WidgetHtmlComponent} from './views/widget/widget-html/widget-html.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {WidgetTextComponent} from './views/widget/widget-text/widget-text.component';
import {FlickrImageSearchComponent} from './views/widget/widget-image/flickr-image-search/flickr-image-search.component';
import {SharedService} from './services/shared.service.client';
import {AuthenticationService} from './services/authentication.service.client';
import {SortableDirective} from "../../directives/sortable.directive";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SimpleHeaderComponent,
    SimpleFooterComponent,
    WebsiteListComponent,
    WebsiteHomeComponent,
    LandscapeHeaderComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageHomeComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetHomeComponent,
    WidgetNewComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetDispHeaderComponent,
    WidgetDispYoutubeComponent,
    WidgetDispImageComponent,
    WidgetDispHtmlComponent,
    WidgetDispTextComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    FlickrImageSearchComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],

  // Client Side services here
  providers: [TestService, AuthenticationService, FlickrService, UserService,
    WebsiteService, PageService, WidgetService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
