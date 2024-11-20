import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CartViewModel } from 'src/app/ViewModels/cart-view-model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  orderTotalPrice: number = 0;
  prdsBought: CartViewModel[] = [];

  selectedCategoryId: number = 0;
  @ViewChild('clientInpRef') clientInputRef!: ElementRef;
  @ViewChild(ProductListComponent) productListObj!: ProductListComponent;
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
  }
  ngAfterViewInit(): void {
    this.clientInputRef.nativeElement.value = 'Your Name Here';
    //  this.productListObj.buyToCart()
    console.log('ProductListComponent:', this.productListObj);
  }

  ngOnInit(): void {}
  onItemBought(item: CartViewModel) {
    this.prdsBought.push(item);
    this.updateItem();
  }
  countChanged(prdName: string, itemCount: any) {
    this.prdsBought = this.prdsBought.map((prd) => {
      if (prd.productName === prdName) {
        return { ...prd, productQuantity: itemCount };
      }
      return prd;
    });
    this.updateItem();
  }
  updateItem() {
    let totalPrice = 0;
    for (let item of this.prdsBought)
      totalPrice += item.productPrice * item.productQuantity;
    this.orderTotalPrice = totalPrice;
  }
  removeRow(prdNam: string) {
    this.prdsBought = this.prdsBought.filter(
      (prd) => prd.productName != prdNam
    );
    this.updateItem();
  }
  completeOrder() {
    console.log(this.productListObj.prdList);
    for (let prd of this.prdsBought) {
      for (let product of this.productListObj.prdList) {
        if (prd.productName === product.name) {
          product.quantity -= prd.productQuantity;
        }
      }
    }
  }
}
