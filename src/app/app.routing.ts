/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteHomeComponent} from './views/website/website-home/website-home.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {WidgetNewComponent} from './views/widget/widget-new/widget-new.component';
import {WidgetHomeComponent} from './views/widget/widget-home/widget-home.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {PageHomeComponent} from './views/page/page-home/page-home.component';
import {FlickrImageSearchComponent} from './views/widget/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthenticationService} from './services/authentication.service.client';




const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'website', component: WebsiteHomeComponent, canActivate: [AuthenticationService]},
  {path: 'website/new', component: WebsiteNewComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid', component: WebsiteEditComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page', component: PageHomeComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/new', component: PageNewComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/:pid/widget', component: WidgetHomeComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/:pid/widget/new', component: WidgetNewComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthenticationService]},
  {path: 'website/:wid/page/:pid/widget/:wgid/flickr',
    component: FlickrImageSearchComponent, canActivate: [AuthenticationService]}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
