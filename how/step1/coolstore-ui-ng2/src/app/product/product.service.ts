import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';

const defaultProducts = [{'itemId': '329299', 'name': 'Red Fedora', 'desc': 'Official Red Hat Fedora', 'price': 34.99, 'availability': {'itemId': '329299', 'quantity': 35, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '329299', 'rating': 4.2, 'count': 5}}, {'itemId': '329199', 'name': 'Forge Laptop Sticker', 'desc': 'JBoss Community Forge Project Sticker', 'price': 8.5, 'availability': {'itemId': '329199', 'quantity': 12, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '329199', 'rating': 1.0, 'count': 12}}, {'itemId': '165613', 'name': 'Solid Performance Polo', 'desc': 'Moisture-wicking, antimicrobial 100% polyester design wicks for life of garment. No-curl, rib-knit collar; special collar band maintains crisp fold; three-button placket with dyed-to-match buttons; hemmed sleeves; even bottom with side vents; Import. Embroidery. Red Pepper.', 'price': 17.8, 'availability': {'itemId': '165613', 'quantity': 45, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '165613', 'rating': 2.3, 'count': 31}}, {'itemId': '165614', 'name': 'Ogio Caliber Polo', 'desc': 'Moisture-wicking 100% polyester. Rib-knit collar and cuffs; Ogio jacquard tape inside neck; bar-tacked three-button placket with Ogio dyed-to-match buttons; side vents; tagless; Ogio badge on left sleeve. Import. Embroidery. Black.', 'price': 28.75, 'availability': {'itemId': '0', 'quantity': 0, 'location': 'Local Store', 'link': 'http://developers.redhat.com'}, 'rating': {'itemId': '165614', 'rating': 3.0, 'count': 51}}, {'itemId': '165954', 'name': '16 oz. Vortex Tumbler', 'desc': 'Double-wall insulated, BPA-free, acrylic cup. Push-on lid with thumb-slide closure; for hot and cold beverages. Holds 16 oz. Hand wash only. Imprint. Clear.', 'price': 6.0, 'availability': {'itemId': '165954', 'quantity': 87, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '165954', 'rating': 4.0, 'count': 66}}, {'itemId': '444434', 'name': 'Pebble Smart Watch', 'desc': 'Smart glasses and smart watches are perhaps two of the most exciting developments in recent years. ', 'price': 24.0, 'availability': {'itemId': '444434', 'quantity': 43, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '444434', 'rating': 5.0, 'count': 76}}, {'itemId': '444435', 'name': 'Oculus Rift', 'desc': 'The world of gaming has also undergone some very unique and compelling tech advances in recent years. Virtual reality, the concept of complete immersion into a digital universe through a special headset, has been the white whale of gaming and digital technology ever since Geekstakes Oculus Rift GiveawayNintendo marketed its Virtual Boy gaming system in 1995.Lytro', 'price': 106.0, 'availability': {'itemId': '444435', 'quantity': 32, 'location': 'Raleigh', 'link': 'http://maps.google.com/?q=Raleigh'}, 'rating': {'itemId': '444435', 'rating': 4.0, 'count': 83}}, {'itemId': '444436', 'name': 'Lytro Camera', 'desc': 'Consumers who want to up their photography game are looking at newfangled cameras like the Lytro Field camera, designed to take photos with infinite focus, so you can decide later exactly where you want the focus of each image to be. ', 'price': 44.3, 'availability': {'itemId': '444436', 'quantity': 53, 'location': 'Tokyo', 'link': 'http://maps.google.com/?q=Tokyo'}, 'rating': {'itemId': '444436', 'rating': 3.0, 'count': 123}}];

@Injectable()
export class ProductService {


  private _products: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public readonly products: Observable<Product[]> = this._products.asObservable();

  constructor() {  }

  updateProducts() {
    this._products.next(defaultProducts);
  }
}
