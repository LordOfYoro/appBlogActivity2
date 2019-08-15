import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() posts;
  @Input() titlePost;
  @Input() textPost;
  @Input() datePost;
  @Input() loveIts;

  constructor() {
  }

  ngOnInit() {
  }

  getTitlePost() {
    return this.titlePost;
  }

  getTextPost() {
    return this.textPost;
  }

  getDatetPost() {
    return this.datePost;
  }

  incrementLove() {
    this.loveIts++;
  }

  decrementLove() {
    this.loveIts--;
  }

}
