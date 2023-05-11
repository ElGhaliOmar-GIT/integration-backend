import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
 forums:any;
 title = 'angular-mateiral';
  constructor(private forumService: ForumService, private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.forumService.getAllForums().subscribe(
      data => { 
        this.forums = data;
        console.log(data)
      },
      err => console.log(err)
      )
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
}
