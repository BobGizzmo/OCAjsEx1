import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

	@Input() title : string;
	@Input() content : string;
	@Input() lovesIt : number;
	@Input() hateIt : number;
	@Input() img_src : string;
	created_at : Date;

	constructor() {
		this.created_at = new Date();
	}

	ngOnInit() {
	}

	addLovesOrShovelHit(bool) {
		bool ? this.lovesIt ++ : this.hateIt ++;
	}
}
