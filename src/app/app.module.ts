import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
// ant
import { NgZorroAntdModule } from 'ng-zorro-antd';
// angular
import { UserCenterComponent } from './user-center/user-center.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FinFriendComponent } from './fin-friend/fin-friend.component';
import { FollowComponent } from './follow/follow.component';
import { ChoiceComponent } from './choice/choice.component';
import { NotificationComponent } from './notification/notification.component';
import { IndexComponent } from './index/index.component';
import { ReleaseComponent } from './release/release.component';
import { RegisterComponent } from './register/register.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SearchComponent } from './search/search.component';
const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/index',
		pathMatch: 'full', // 匹配全局，默认是'prefix','full'是全局匹配/
	 },
	{ path: 'index', component: IndexComponent,
	 	children: [
			  { path: '', component: HomeComponent },
			  { path: 'home', component: HomeComponent },
			  { path: 'finfriend', component: FinFriendComponent },
			  { path: 'follow', component: FollowComponent },
			  { path: 'choice', component: ChoiceComponent },
			  { path: 'notification', component: NotificationComponent },
			  { path: 'release', component: ReleaseComponent },
			  {
				  path: 'usercenter',
				  component: UserCenterComponent,
				  data: { title: 'Heroes List' }
			  },
		 ]
	},
	{ path: 'custom', // 游客
		children: [
			{ path: '', component: ErrorComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'register', component: RegisterComponent },
		]
	},
	{ path: 'main',
		children: [
			{ path: '', component: ErrorComponent },
			{ path: 'search', component: SearchComponent },
		]
	},
	{ path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
	AppComponent,
	UserCenterComponent,
	LoginComponent,
	HomeComponent,
	ErrorComponent,
	FinFriendComponent,
	FollowComponent,
	ChoiceComponent,
	IndexComponent,
	ReleaseComponent,
	RegisterComponent,
	SearchComponent,
	NotificationComponent,
  ],
  imports: [
	  RouterModule.forRoot(
		  appRoutes,
		  { enableTracing: true } // <-- debugging purposes only
	  ),
	OverlayModule,
	BrowserModule,
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatButtonModule,
	MatCheckboxModule,
	MatSidenavModule,
	MatIconModule,
	MatInputModule,
	MatToolbarModule,
	MatListModule,
	NgZorroAntdModule.forRoot(),
  ],
	providers: [
		MediaMatcher,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
