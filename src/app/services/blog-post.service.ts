import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  posts: Post[] = [
    {
      title: 'Le test',
      img_src: 'http://lorempixel.com/400/200/',
      content: 'Généralement, on utilise un texte en faux latin (le texte ne veut rien dire,' +
        ' il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d\'attente.' +
        ' L\'avantage de le mettre en latin est que l\'opérateur sait au premier coup d\'oeil que la page' +
        ' contenant ces lignes n\'est pas valide, et surtout l\'attention du client n\'est pas dérangée par ' +
        'le contenu, il demeure concentré seulement sur l\'aspect graphique.',
      lovesIt: 3,
      hateIt: 2
    }];
  postsSubject = new Subject<Post[]>();

  constructor(private route: ActivatedRoute) { }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  getPosts() {
    return this.posts;
  }

  getOnlyOnePost(index: number) {
    return this.posts[index];
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  changePost(index: number, post: Post) {
    this.posts.splice(index, 1, post);
    this.emitPosts();
  }

  deletePost(post: number) {
    this.posts.splice(post, 1);
    this.emitPosts();
  }
}
