import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
totalPrice:any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPrice =this.route.snapshot.paramMap.get('price');
    
  }

}
