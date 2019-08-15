import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
