import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: Product[] = [
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
    {name: "Ball Pen", category: "Pen", id: "erraxctrgvefea", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
