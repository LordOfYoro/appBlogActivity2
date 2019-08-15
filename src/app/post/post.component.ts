import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[];
  postSubscription: Subscription;
  constructor(private postService: PostService) {
    // this.posts = this.postService.posts;
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
      this.posts = posts ;
    });
    this.postService.emitPostSubject();
  }
  ngOnInit() {
  }

}
