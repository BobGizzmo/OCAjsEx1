import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {BlogPostService} from './services/blog-post.service';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'blog/new', component: NewPostComponent},
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'blog', component: PostListComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', redirectTo: '/blog' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
    SingleBlogComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BlogPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
