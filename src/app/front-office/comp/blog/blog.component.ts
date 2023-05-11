import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogs:Blog[]= [];
 title = 'angular-mateiral';
 nameFilter: string = '';
 filter: boolean = false;
  filteredPosts: Blog[] = [];
  constructor(private blogService: BlogService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }
  getAllBlogs(): void{
this.blogService.getAllBlogs().subscribe(
      data => { 
        console.log(data)
        this.blogs = data;
      },
      err => console.log(err)
      )
  }
  openDialog(blog:any):void{
    this.matDialog.open(PopUpComponent,{data:blog});
  }
  onNameFilterChange(value: any) {
    this.filteredPosts = this.blogs.filter(blog => blog.title.toLowerCase().includes(value.value.toLowerCase()));
    this.blogs= this.filteredPosts;
    if(value.value == ""){
      this.getAllBlogs()
    }
  }

}
