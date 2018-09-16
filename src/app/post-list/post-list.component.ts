import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subscription} from 'rxjs';
import {BlogPostService} from '../services/blog-post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  title = 'this blog';
  posts: Post[] = [];
  postSubscription = new Subscription();

  constructor(private blogPostService: BlogPostService,
              private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.blogPostService.postsSubject.subscribe(
      (post: Post[]) => {
        this.posts = post;
      }
    );
    this.blogPostService.getPosts();
    this.blogPostService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
