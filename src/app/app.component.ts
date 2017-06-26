import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/Rx';


@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
			<div class="container">
			  <router-outlet></router-outlet>
			</div>
  			`
})
export class AppComponent  { 

}
