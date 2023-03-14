import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postArray: any
  similarPostArray: any
  constructor(private router: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe((value) => {
      // this.postService.countViews(value.id)
      this.postService.loadOnePost(value.id).subscribe((value) => {
        this.postArray = value
        this.loadSimilarPost(this.postArray.category.categoryId)
      })
    })
  }

  loadSimilarPost(catId: string) {
    this.postService.loadSimilar(catId).subscribe((val) => {
      this.similarPostArray = val
    })
  }

}
