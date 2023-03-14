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
  constructor(private router: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe((value) => {
      this.postService.loadOnePost(value.id).subscribe((value) => {
        this.postArray = value
      })
    })
  }

}
