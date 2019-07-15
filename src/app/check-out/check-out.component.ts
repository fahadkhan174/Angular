import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shipping: {
    name: string,
    addressLine1: string,
    addressLine2: string,
    city: string
  };

  constructor() { }

  ngOnInit() {
  }

  placeOrder() {
    console.log(this.shipping);
  }

}
