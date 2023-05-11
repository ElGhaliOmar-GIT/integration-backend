import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Blog } from '../../models/blog';
import { Request } from '../../models/request';
import { RequestService } from '../../services/request.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  request:Request[]= [];
 title = 'angular-mateiral';
 nameFilter: string = '';
 filter: boolean = false;
  filteredPosts: Request[] = [];

  constructor(private requestService: RequestService, private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }
getAllBlogs(): void{
this.requestService.getAllRequests().subscribe(
      data => { 
        this.request = data;
        console.log(data)
      },
      err => console.log(err)
      )
  }
  openDialog(blog:any):void{
    this.matDialog.open(PopUpComponent,{data:blog});
  }
  onNameFilterChange(value: any) {
    this.filteredPosts = this.request.filter(blog => blog.title.toLowerCase().includes(value.value.toLowerCase()));
    this.request= this.filteredPosts;
    if(value.value == ""){
      this.getAllBlogs()
    }
  }
}
