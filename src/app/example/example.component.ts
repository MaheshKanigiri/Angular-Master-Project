import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  message = 'Hello from the Example Component!';
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
