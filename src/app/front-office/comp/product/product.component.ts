import { ProduitService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:any;
  constructor(private productService: ProduitService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => { 
        this.products = data;
        console.log(data)
      },
      err => console.log(err)
      )
  }

}
