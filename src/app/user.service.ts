import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  //returns some json to whatever component it uses
  getUser() {
    return { name: 'John Doe', age: 30 };
  }
}
