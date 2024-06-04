import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy{
  constructor() { }

  ngOnInit(): void {
    console.log('ProductComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('ProductComponent destroyed');
  }
}
