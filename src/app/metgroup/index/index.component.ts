import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { Post } from "../post";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



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
  constructor(public postService: PostService,
    private router: Router,
    private toastr: ToastrService) { }

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
  deletePost(post: any) {
    this.postService.delete(post).subscribe(res => {
      //this.posts = this.posts.filter(item => item.id !== post);
      console.log('Tienda deleted successfully!');
      this.toastr.error('', 'Tienda Eliminada ');
      this.router.navigateByUrl('metgroup/index');
    })
  }

}
