import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featurePostArray: any

  constructor(private postService: PostsService) {
    this.postService.loadFeature().subscribe(val => {
      this.featurePostArray = val;
    })
  }

}
