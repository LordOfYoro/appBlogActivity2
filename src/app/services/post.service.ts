import {Subject} from 'rxjs';

export class PostService {
  postSubject = new Subject<any[]>();
  posts = [
    {
      title: 'Mon premier post',
      content: 'Denique Antiochensis ordinis vertices sub uno elogio iussit occidi ideo efferatus, quod ' +
        'ei celebrari vilitatem intempestivam urgenti, cum inpenderet inopia, gravius rationabili responderunt;',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Apud has gentes, quarum exordiens initium ab Assyriis ad Nili cataractas porrigitur ' +
        'et confinia Blemmyarum, omnes pari sorte sunt bellatores seminudi coloratis sagulis pube tenus',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Sed quid est quod in hac causa maxime homines admirentur et ' +
        'reprehendant meum consilium, cum ego idem antea multa decreverim, que magis ' +
        'ad hominis dignitatem quam ad rei publicae necessitatem ',
      loveIts: 0,
      created_at: new Date()
    }];
  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }
  incrementLove(i: number) {
    this.posts[i].loveIts++;
    this.emitPostSubject();
  }
  decrementLove(i: number) {
    this.posts[i].loveIts--;
    this.emitPostSubject();
  }
  addPosts(namePost: string, contentPost: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = namePost;
    postObject.content = contentPost;
    this.posts.push(postObject);
    this.emitPostSubject();
  }
  deletePost(i: number) {
      this.posts.splice(i, 1);
      console.log('je suis ici avec i=' + i);
      console.log(this.posts);
      this.emitPostSubject();
  }
}
