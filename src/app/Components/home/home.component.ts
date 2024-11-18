import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;
  isImgShown: Boolean = true;
  constructor() {
    this.storeInfo = new StoreData('store', 'https://picsum.photos/400/200', [
      'Cairo',
      'Alex',
    ]);
  }

  ngOnInit(): void {}
  toggleImg() {
    this.isImgShown = !this.isImgShown;
  }
}
