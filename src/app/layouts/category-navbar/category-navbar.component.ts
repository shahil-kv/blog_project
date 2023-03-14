import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: any
  postArray: any
  constructor(private categoryService: CategoriesService, private postService: PostsService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((category) => {
      this.categoryArray = category
    })
    this.postService.loadLatest().subscribe((value) => {
      this.postArray = value
    })
  }
}
