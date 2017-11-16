import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartItem} from './cartitem';
import {CartService} from './cart.service';
import {Subscription} from 'rxjs/Subscription';
import {Action, ActionConfig, CardConfig, EmptyStateConfig, ListConfig} from 'patternfly-ng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  items: CartItem[];
  listConfig: ListConfig;
  emptyStateConfig: EmptyStateConfig;
  summaryConfig: CardConfig;
  private subscription: Subscription;

  constructor(private cartService: CartService, private router: Router) {
    this.subscription = cartService.cart.subscribe(data => {
      this.items = data;
    });
  }

  remove(product: string){
    this.cartService.remove(product);
  }

  handleAction($event: Action, item: any): void {
    if ($event.id === 'return') {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.summaryConfig = {
    } as CardConfig;

    this.emptyStateConfig = {
      actions: {
        primaryActions: [{
          id: 'return',
          title: 'Return to Store',
        }],
        moreActions: []
      } as ActionConfig,
      title: 'You have not added any items to your cart',
    } as EmptyStateConfig;

    this.listConfig = {
      dblClick: false,
      emptyStateConfig: this.emptyStateConfig,
      multiSelect: false,
      selectItems: false,
      selectionMatchProp: 'name',
      showCheckbox: false,
      useExpandItems: false
    } as ListConfig;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
