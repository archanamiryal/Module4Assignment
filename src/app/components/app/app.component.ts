import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template :`
  <h1>Root App</h1>
  <a routerLink="/login"> Login </a>
  <a routerLink="/home"> Home </a>
  
  <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }