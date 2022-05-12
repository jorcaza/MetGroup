import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { Post } from "../post";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticlesIndex } from "../articles-index";

@Component({
  selector: 'app-articles-index',
  templateUrl: './articles-index.component.html',
  styleUrls: ['./articles-index.component.css']
})
export class ArticlesIndexComponent implements OnInit {


  articles: ArticlesIndex[] = [];

  constructor(
    public postService: PostService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.postService.getAllArticles().subscribe((data: any[]) => {
      //console.log(data);
      this.articles = data;

      // console.log(this.posts);
    })

  }

}
