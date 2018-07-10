import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    dateFormat: any = new Date();
    books:any[]=[
        {
          "name": "My Experiments with truth",
          "author": "M.K.Gandhi",
          "price": "$ 145",
          
        },
        {
          "name": "The Merchant of Venice",
          "author": "William Shakesphere",
          "price": "$ 543"
        },
        {
          "name": "A Talew of cities",
          "author": "Charles Dickness",
          "price": "$ 65"
        },
        {
          "name": "Origin of species",
          "author":"Charles Darwin",
          "price": "$ 283"
        },
        {
          "name": "Time Machine",
          "author":"H.G.Wells",
          "price": "$ 12"
        },
        {
            "name": "Main Kampf",
            "author":"Adolf Hitler",
            "price": "$ 345"
          },
          {
            "name": "Invisible Man",
            "author":"H.G.Wells",
            "price": "$ 123"
          }
      ];
}