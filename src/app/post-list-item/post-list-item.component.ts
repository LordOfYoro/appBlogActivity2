import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

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
  @Input() index: number;
  deleteThisPost() {
    this.postService.deletePost(this.index);
  }

  incrementLove() {
    this.postService.incrementLove(this.index);
  }

  decrementLove() {
    this.postService.decrementLove(this.index);
  }

  constructor(private postService: PostService) {
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

}
