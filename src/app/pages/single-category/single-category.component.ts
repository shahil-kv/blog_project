import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  postArray: any
  valueId: any
  title!: string
  subTitle!: string
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.valueId = value
      this.postService.loadCategoryPosts(value.id).subscribe((post) => {
        this.postArray = post
        this.subTitle = this.postArray[0].data.excerpt
        this.title = this.postArray[0].data.category.category
      })
    })
  }

}
