import { Component, Input, OnInit } from '@angular/core';
import {BlogPostService} from '../services/blog-post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

	@Input() title: string;
	@Input() content: string;
	@Input() lovesIt: number;
	@Input() hateIt: number;
	@Input() img_src: string;
	@Input() index: number;
	created_at: Date;

	constructor(private blogPostService: BlogPostService) {
		this.created_at = new Date();
	}

	ngOnInit() {
	}

	addLovesOrShovelHit(bool) {
		bool ? this.lovesIt ++ : this.hateIt ++;
	}

  onDeletePost(post: number) {
    this.blogPostService.deletePost(post);
  }
}
