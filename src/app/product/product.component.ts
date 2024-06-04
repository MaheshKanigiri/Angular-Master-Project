import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  constructor() { }

  //Parent to Child Communication with @Input
  @Input()
  productName!: string;

  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.productClicked.emit(this.productName);
  }

  ngOnInit(): void {
    console.log('ProductComponent initialized with product:', this.productName);
  }
}
