import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'body-parser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any;
  password:any;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.userService.login({username: this.userName, password: this.password}).subscribe(
      data =>{
         console.log(data);
         localStorage.setItem('jwtToken', data.jwtToken)
         localStorage.setItem('user', JSON.stringify(data.user))
         localStorage.setItem('userRole', data.user.role)
         localStorage.setItem('userName', data.user.username)

        this.route.navigate(['Product'])
        }, 
        err => console.log(err));
  }

}
