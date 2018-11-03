import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	user: string;
	password: string;
	phone: string;
	SMSCode: string;
	pwdlen = 0;
	phonelen = 0;
	pwdType = 0;
	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

	ngOnInit() {
	}
	// 密码输入 不为空 出现删除按钮
	pwdInput() {
		this.pwdlen = this.password.length;
	}
	phoneInput() {
		this.phonelen = this.phone.length;
	}
	// 切换密码可见/不可见
	pwdTypeToggle() {
		this.pwdType == 0 ? this.pwdType = 1 : this.pwdType = 0;
	}
	// 取消
	back() {
		// 这里判断id，url进来的带了一个关联id，比如你要查看一个用户的详细信息，根据id关联
		// 在这个页面获取到这个id，然后进行的路由的相对跳转
		this.router.navigate(['/index'], { relativeTo: this.activatedRoute });
	}
}
