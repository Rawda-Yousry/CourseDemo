import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  catList: ICategory[];
  prdList: IProduct[];
  orderTotalPrice: number = 0;
  selectedCategoryId: number = 0;

  constructor() {
    this.catList = [
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Tablet',
      },
      {
        id: 3,
        name: 'Mobile',
      },
    ];
    this.prdList = [
      {
        id: 100,
        name: 'LenovoThinkPad Laptop',
        price: 100,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook Laptop',
        price: 200,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tab 2',
        price: 300,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 2,
      },
      {
        id: 400,
        name: 'Samsung Tab 2',
        price: 400,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 2,
      },
      {
        id: 500,
        name: 'Samsung Note 10',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryId: 3,
      },
    ];
  }

  buy(prdPrice: number, count: any) {
    this.orderTotalPrice = prdPrice * +count;
  }

  ngOnInit(): void {}
}
