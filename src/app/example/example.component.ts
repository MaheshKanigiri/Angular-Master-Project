import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})

export class ExampleComponent {
  message = 'Hello from the Example Component!';

  onClick() {
    this.message = 'Button clicked!';
  }
}
