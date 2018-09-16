export class Post {
  img_src: string;
  lovesIt: Number;
  hateIt: Number;

  constructor(public title: string,
              public content: string) {
    this.img_src = 'http://lorempixel.com/400/200/';
    this.lovesIt = 0;
    this.hateIt = 0;
  }

}
