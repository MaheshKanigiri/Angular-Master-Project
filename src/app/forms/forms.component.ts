import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  constructor() { }

  // onSubmit(userForm: any): void {
  //   console.log('User Form Data:', userForm.value);
  // }

  onSubmit(form: NgForm): void {
    console.log('Form Submitted!', form.value);
  }
}
