import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: any = "Login Please"
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('userName'));
    if(localStorage.getItem('userName')!== null){
      this.userName = localStorage.getItem('userName')
    }
  }

}
