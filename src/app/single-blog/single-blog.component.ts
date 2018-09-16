import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogPostService} from '../services/blog-post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  postForm: FormGroup;
  index: number = this.route.snapshot.params['id'];
  post: Post = this.blogPostService.getOnlyOnePost(this.index);

  constructor(private formBuilder: FormBuilder,
              private blogPostService: BlogPostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title: [this.post['title'], Validators.required],
        content: [this.post['content'], Validators.required],
      }
    );
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const modifPost = new Post(
      formValue['title'],
      formValue['content']
    );

    this.blogPostService.changePost(this.index, modifPost);
    this.router.navigate(['/blog']);
  }

}
