import {Component, OnInit} from '@angular/core';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(public productService: ProductService){ }

  ngOnInit(){
    this.productService.updateProducts();
  }
}
