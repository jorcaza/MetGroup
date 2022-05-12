import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Post, create, login } from "../post";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public postService: PostService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }



  /**
 * Write code on Method
 *
 * @return response()
 */
  submit() {
    console.log(this.form.value);
    this.router.navigateByUrl('metgroup/index');
    // this.postService.auth(this.form.value).subscribe((res: login) => {
    //   //console.log(res);
    //   //this.toastr.success('', 'Tienda Creada Exitosamente');
    //   this.router.navigateByUrl('metgroup/index');
    // })
  }

}
