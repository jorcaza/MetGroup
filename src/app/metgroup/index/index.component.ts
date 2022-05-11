import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { Post } from "../post";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: any[] = [];
  cantidad: any[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public postService: PostService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      //console.log(data);
      this.posts = data;

      // console.log(this.posts);
    })
  }


  //   import {map} from 'rxjs/operators';




  /**
   * Write code on Method
   *
   * @return response()
   */
  /*deletePost(id: number) {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }*/

}
