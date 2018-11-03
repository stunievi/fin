import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';


@Component({
	selector: 'app-fin',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
	constructor(public el: ElementRef) {

	}
	ngAfterViewInit() { // 模板中的元素已创建完成

	}
	ngOnInit() {

	}

}
