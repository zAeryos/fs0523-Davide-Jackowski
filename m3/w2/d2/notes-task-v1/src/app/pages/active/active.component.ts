import { Component } from '@angular/core';
import { PostsService } from '../../posts.service';
import { IPosts } from '../../models/iposts';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  posts:IPosts[] = [];

  constructor(private postsService:PostsService) {}

  ngOnInit(){
    this.posts = this.postsService.posts;
  }
}
