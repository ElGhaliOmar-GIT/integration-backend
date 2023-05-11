import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
title:any;
content:any;
evidence:any;
  constructor(private requestService: RequestService, private route: Router) { }

  ngOnInit(): void {
  }
 onSubmit(): void{
    const data = {
      title: this.title,
      content: this.content,
      evidence: this.evidence,
    };
    this.requestService.createRequest(data).subscribe(data => {console.log(data); this.route.navigate(['Product'])}, err => console.log(err))
  }
}
