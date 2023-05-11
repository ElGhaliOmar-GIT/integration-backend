  import { Component, ElementRef, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any;
  showPDF:Boolean = false;
  public showWidgets = false;
  constructor(private cartService: CartService, private route: Router) { }


  ngOnInit(): void {
    this.cartService.getListCart().subscribe(data => {
      console.log(data[0].commandLines[0].products);
      this.carts = data[0].commandLines[0].products;
    },
    err=> console.log(err))
  }
  submit() {

    this.route.navigate(['checkouts', this.carts[0].price * this.carts[0].stock])
  }
  openPDF() : void {
    this.route.navigate(['pdfViewer'])
  }

}
