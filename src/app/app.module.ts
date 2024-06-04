import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAccessComponent } from './customer-access/customer-access.component';
import { FormsComponent } from './forms/forms.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    UserProfileComponent,
    ProductComponent,
    CustomerComponent,
    CustomerAccessComponent,
    FormsComponent,
    HttpDemoComponent,
    PipesDemoComponent,
    CapitalizePipe,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
