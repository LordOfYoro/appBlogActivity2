import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  onSubmit(form: NgForm) {
    const namePost = form.value.namePost;
    const contentPost = form.value.contentPost;
    this.postService.addPosts(namePost, contentPost) ;
    this.router.navigate(['/posts']);
  }
  constructor(private postService: PostService, private router: Router) {
  }
  ngOnInit() {
  }

}
