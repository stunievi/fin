import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable, Observer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCenterComponent } from '../user-center/user-center.component';
import { LoginComponent } from '../login/login.component';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit, AfterViewInit {
	// 分辨率检测
	mobileQuery: MediaQueryList;
	name = 'Fin.im';
	// 分辨率检测的方法
	medias: any;
	// 菜单选中
	linkChoice = '0';
	// 菜单列表
	link: Array<{ id: string, title: string, icon: string, href: string, }>;
	//  顶部导航按钮
	topNavButton = 0;
	// 抽屉宽度转换 start
	navdom: any;
	drawer: any;
	navWidth: any;
	drawerWidth: any;
	appContentWidth: any;
	//  抽屉宽度转换 end
	// 登录界面隐藏nav
	loginUi: string;
	constructor(public media: MediaMatcher, public router: Router, public el: ElementRef) {
		this.medias = media;
		this.mobileQuery = this.medias.matchMedia('(max-width: 600px)');
		this.link = [
			{ id: '0', title: '首页', icon: 'home', href: '/index' },
			{ id: '1', title: 'F圈', icon: 'donut_large', href: '/index/finfriend' },
			{ id: '2', title: '关注', icon: 'favorite', href: '/index/follow' },
			{ id: '3', title: '精选', icon: 'thumb_up', href: '/index/choice' },
			{ id: '4', title: '通知', icon: 'notifications', href: '/index/notification' },
		];
		// icon
	}
	ngAfterViewInit() { // 模板中的元素已创建完成
		// pc
		if (!this.mobileQuery.matches) {
			this.navdom = this.el.nativeElement.querySelector('#pc-nav');
			this.drawer = this.el.nativeElement.querySelector('#drawer');
			this.appContentWidth = this.el.nativeElement.querySelector('#app-content').clientWidth;
			this.navWidth = this.navdom.clientWidth;
			this.drawerWidth = this.drawer.clientWidth;

			this.appContentWidth = this.el.nativeElement.querySelector('#app-content').offsetWidth;
			this.navdom.style.width = this.appContentWidth + 'px';
		}
	}
	ngOnInit() {
		// 页面监听 宽度变化
		Observable.fromEvent(window, 'resize')
			.debounceTime(100) // 以免频繁处理
			.subscribe((event) => {
				// 这里处理页面变化时的操作
				this.mobileQuery = this.medias.matchMedia('(max-width: 600px)');
				if (!this.mobileQuery.matches) {
					this.navdom = this.el.nativeElement.querySelector('#pc-nav');
					setTimeout(() => {
						this.appContentWidth = this.el.nativeElement.querySelector('#app-content').offsetWidth;
						this.navdom.style.width = this.appContentWidth + 'px';
					}, 100);
				}
			});
		this.router.events
			.subscribe((event) => {
				// example: NavigationStart, RoutesRecognized, NavigationEnd
				this.loginUi = event['url'];
			});
	}
	// 抽屉关闭
	sidenavclose() {
		// pc
		if (!this.mobileQuery.matches) {
			console.log(111);
			this.navWidth = this.navdom.clientWidth;
			setTimeout(() => {
				this.appContentWidth = this.el.nativeElement.querySelector('#app-content').offsetWidth;
				for (let i = this.navWidth; i < this.appContentWidth; i++) {
					setTimeout(() => {
						this.navdom.style.width = i + 'px';
					}, 5);
				}
			}, 300);
			this.topNavButton = 1;
		}

	}
	// 抽屉打开
	sidenavopen() {
		if (!this.mobileQuery.matches && this.navdom.clientWidth != null) {
			this.navWidth = this.navdom.clientWidth;
			setTimeout(() => {
				this.appContentWidth = this.el.nativeElement.querySelector('#app-content').offsetWidth;
				for (let i = this.navWidth; i > this.appContentWidth; i--) {
					setTimeout(() => {
						this.navdom.style.width = i + 'px';
					}, 5);
				}
			}, 300);
			this.topNavButton = 0;
		}
	}
	choice(id: string) {
		this.linkChoice = id;
		console.log(id);
	}
}
