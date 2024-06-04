import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
   // Reactive form group
   userForm: FormGroup;

   constructor(private fb: FormBuilder) {
     this.userForm = this.fb.group({
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]]
     });
   }

   ngOnInit(): void {}

   // Reactive form submit handler
   onSubmit(): void {
     if (this.userForm.valid) {
       console.log('Reactive Form Data:', this.userForm.value);
     }
   }

   // Template-driven form submit handler
   onSubmitF(userForm: any): void {
     console.log('Template-driven Form Data:', userForm.value);
   }
}
