import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  itemCount: number;
  subtotal: number;

  constructor(private cartService: CartService) {
    this.subscription = cartService.cart.subscribe(data => {
      this.itemCount = data.map(d => d.quantity).reduce((a, b) => a + b, 0);
      this.subtotal = data.map(d => d.product.price * d.quantity
      ).reduce((a, b) => a + b, 0.00);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
