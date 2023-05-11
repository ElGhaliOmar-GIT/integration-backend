import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
firstName:any;
lastName:any;
phoneNumber:any;
password:any;
userName:any;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    const data = {
      firstName: this.firstName,
      username: this.userName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      password: this.password,
      accountStatus: "Online",
      role:"User"
    };
    this.userService.register(data).subscribe(data => {console.log(data);localStorage.setItem('userName', data.username); this.route.navigate(['Product'])}, err => console.log(err))
  }
}
