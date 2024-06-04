import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAccessComponent } from './customer-access/customer-access.component';
import { FormsComponent } from './forms/forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/example', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer-access', component: CustomerAccessComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'http-demo', component: HttpDemoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
