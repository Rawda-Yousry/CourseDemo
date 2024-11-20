import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CartViewModel } from 'src/app/ViewModels/cart-view-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
  prdList: IProduct[];
  prdCatList: IProduct[] = [];
  prdBought: CartViewModel = {
    productName: '',
    productPrice: 0,
    productQuantity: 0,
  };
  orderTotalPrice: number = 0;
  @Input()
  sentCatId: number = 0;
  orderDate: Date;
  @Output()
  itemBought: EventEmitter<CartViewModel>;

  constructor() {
    this.orderDate = new Date();
    this.itemBought = new EventEmitter<CartViewModel>();

    this.prdList = [
      {
        id: 100,
        name: 'LenovoThinkPad Laptop',
        price: 1000000,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook Laptop',
        price: 20044444,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tab 2',
        price: 30066666,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 2,
      },
      {
        id: 400,
        name: 'Samsung Tab 2',
        price: 40044444,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 2,
      },
      {
        id: 500,
        name: 'Samsung Note 10',
        price: 5002222,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 60022222,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 3,
      },
    ];
    this.prdCatList = this.prdList;
  }
  ngOnChanges(): void {
    this.fiterPrdsByCatId();
  }
  // buy(prdPrice: number, count: any) {
  //   this.orderTotalPrice = prdPrice * +count;
  //   this.itemBought.emit(this.prdsBought);
  // }
  buyToCart(item: CartViewModel) {
    this.orderTotalPrice = item.productPrice * +item.productQuantity;

    this.itemBought.emit(item);
  }

  ngOnInit(): void {}

  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }
  private fiterPrdsByCatId() {
    if (this.sentCatId == 0) this.prdCatList = this.prdList;
    else {
      this.prdCatList = this.prdList.filter(
        (prd) => prd.categoryId == this.sentCatId
      );
    }
  }
}
