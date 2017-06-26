import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav.component';
import { AddressComponent } from './address.component';
import { AdduserFormComponent } from './adduser-form.component';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routingComponents }  from './app.routing';
import { FormsModule }   from '@angular/forms';
import { CollapseDirective } from 'ng2-bootstrap';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, NavComponent, routingComponents, CollapseDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }