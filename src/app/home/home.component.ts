import { Component, OnInit, ElementRef, } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';
import { Observable } from 'rxjs';


import { ReleaseComponent } from '../release/release.component';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	infoList = ['1', '2', '3', '3', '3', '3', '3', '3', '3', '3', '3'];
	sele: any;
	id: any;
	constructor(public el: ElementRef, public  route: ActivatedRoute, ) {
		this.sele = el.nativeElement;
	 }
	ngOnInit() {
		// 页面监听
	}
	release() {
		// ReleaseComponent
	}

}
