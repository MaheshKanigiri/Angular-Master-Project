import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrl: './http-demo.component.css'
})
export class HttpDemoComponent {
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData('posts/1').subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
