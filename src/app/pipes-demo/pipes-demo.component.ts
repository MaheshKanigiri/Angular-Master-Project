import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  today: Date = new Date();
  message: string = 'Hello World';
  amount: number = 1234.5678;
  percent: number = 0.75;
  currencyValue: number = 50;
}
