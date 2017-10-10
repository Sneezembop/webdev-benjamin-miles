import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './views/user/login/login.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { RegisterComponent } from './views/user/register/register.component';
import { SimpleHeaderComponent } from './views/sharedComponents/simple-header/simple-header.component';
import { SimpleFooterComponent } from './views/sharedComponents/simple-footer/simple-footer.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebsiteHomeComponent } from './views/website/website-home/website-home.component';
import { LandscapeHeaderComponent } from './views/sharedComponents/landscape-header/landscape-header.component';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { PageHomeComponent } from './views/page/page-home/page-home.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { WidgetHomeComponent } from './views/widget/widget-home/widget-home.component';
import { WidgetNewComponent } from './views/widget/widget-new/widget-new.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';

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
    WidgetEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [TestService, UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
