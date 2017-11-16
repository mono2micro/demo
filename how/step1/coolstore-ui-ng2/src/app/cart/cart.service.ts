import { Injectable } from '@angular/core';
import {Product} from '../product/product';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CartItem} from './cartitem';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {

  private __cart: {[itemId: string]: CartItem} = {};
  private _cart: BehaviorSubject<CartItem[]> =  new BehaviorSubject([]);
  public readonly cart: Observable<CartItem[]> = this._cart.asObservable();

  constructor() { }

  add(product: Product, quantity: number){
    const q: number = this.__cart.hasOwnProperty(product.itemId) ? this.__cart[product.itemId].quantity : 0;
    this.__cart[product.itemId] = {product: product, quantity: q + quantity};
    this._cart.next(Object.values(this.__cart));
  }

  remove(product: string){
    delete this.__cart[product];
    this._cart.next(Object.values(this.__cart));
  }

}
