import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-master-project';

  onProductClick(productName: string) {
    alert(`Product clicked: ${productName}`);
  }
}
