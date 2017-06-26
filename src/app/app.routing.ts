import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { AdduserFormComponent } from './adduser-form.component';

const appRoutes: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'adduser-form', component: AdduserFormComponent },


  { path: '',
    redirectTo: 'address',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AddressComponent, AdduserFormComponent]