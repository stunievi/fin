import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
	loginState = 0;
	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		if (this.loginState == 0) {
			// 未登录跳转登录页
			this.router.navigate(['/custom/login'], { relativeTo: this.activatedRoute });
		}
	}

}
