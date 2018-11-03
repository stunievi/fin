import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user: string;
	password: string;
	pwdlen = 0;
	constructor(private modalService: NzModalService, public router: Router, public activatedRoute: ActivatedRoute) { }

	ngOnInit() {

	}
	// 密码输入 不为空 出现删除按钮
	testInput() {
		this.pwdlen = this.password.length;
	}
	// 删除按钮点击事件
	clearInput() {
		this.password = '';
		this.pwdlen = this.password.length;
	}
	// 取消
	back() {
		// 这里判断id，url进来的带了一个关联id，比如你要查看一个用户的详细信息，根据id关联
		// 在这个页面获取到这个id，然后进行的路由的相对跳转
			this.router.navigate(['/index'], { relativeTo: this.activatedRoute });
	}
}
