import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops :any;
showMap: Boolean = false;
cord:any;
  constructor(private shopService: ShopService, private route: Router) { }
  ngOnInit(): void {
    this.shopService.getShopsList().subscribe(
      data => { 
        this.shops = data;
        console.log(data)
      },
      err => console.log(err)
      )
      
  }
  getLocation(name: string) : void {

    this.shopService.getShopLocation(name).subscribe(
      data => {
        this.showMap = true;
        this.cord = data;
      },
      err => console.log(err)
    )
  }
}
