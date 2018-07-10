import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';

@Component({
    selector: 'login',
    templateUrl:'./login.component.html'
    
    
    
})
export class LoginComponent implements OnInit {

    model=new Login("","");
    form:any;
    constructor() { }

    ngOnInit() { }
}