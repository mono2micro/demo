import {Component, Input, OnInit} from '@angular/core';
import {CardConfig} from 'patternfly-ng';
import {Product} from './product';
import {CartService} from '../cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  config: CardConfig;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.config = {
      title: this.product.name,
      subTitle: this.product.desc
    } as CardConfig;
  }

  addToCart(quantity: string){
    this.cartService.add(this.product, +quantity);
  }

}
