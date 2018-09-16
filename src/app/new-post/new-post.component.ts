import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogPostService} from '../services/blog-post.service';
import {Router} from '@angular/router';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private blogPostService: BlogPostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    );
  }

  onSubmitForm() {
    const formValue = this.newPostForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content']
    );
    this.blogPostService.addPost(newPost);
    this.router.navigate(['/blog']);
  }

}
