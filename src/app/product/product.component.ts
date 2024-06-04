import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  constructor() { }

  productDescription: string = 'This is a great product!';

  productImage: string = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  productQuantity: number = 1;

  isAvailable: boolean = true;

  onBuy() {
    alert(`You bought ${this.productName}!`);
  }

  //Parent to Child Communication with @Input
  @Input()
  productName!: string;

  //Child to Parent Comunication emit with @output
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.productClicked.emit(this.productName);
  }

  ngOnInit(): void {
    console.log('ProductComponent initialized with product:', this.productName);
  }
}
