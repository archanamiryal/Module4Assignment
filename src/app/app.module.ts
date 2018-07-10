import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app/app.component';
import { routing, appRoutingProviders } from './routes/app.routes';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule],
  declarations: [ AppComponent, HomeComponent,LoginComponent ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }