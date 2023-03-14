import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() PostData!: any

  postImg!: string
  postViews!: string
  postTitle!: string
  postExcerpt!: string
  postCreatedAt!: any
  postCategory!: string
  time!: any
  postId!: string
  ngOnInit(): void {
    if (this.PostData) {
      this.postId = this.PostData.id
      console.log(this.postId)
      this.postImg = this.PostData.data.postImgPath
      this.postCategory = this.PostData.data.category.category
      this.postViews = this.PostData.data.view
      this.postTitle = this.PostData.data.title
      this.postExcerpt = this.PostData.data.excerpt
      this.postCreatedAt = this.PostData.data.createdAt
      this.time = this.toDateTime(this.postCreatedAt)
    } else {

    }

  }
  toDateTime(secs: any) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

}
