import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/product.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  constructor(public productService: ProductService){ }

  ngOnInit(){
    this.productService.updateProducts();
  }

}
