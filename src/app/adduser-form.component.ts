import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from "@angular/core";
import { PostService } from './post.service';

@Component({
	selector: 'adduser-form',
	templateUrl: 'app/templates/adduser-form.template.html',
	providers: [PostService]
})

export class AdduserFormComponent implements OnInit {
	user: any = [];
	users: any = [];
	errorMsg: string;
	constructor(private _postService: PostService){}

	ngOnInit(){
        this._postService.getUser()
            .subscribe( (resUserData) => this.users = (resUserData),
                        resUserError => this.errorMsg = resUserError);
    }

	onSubmit(user: NgForm) {
	    console.log(user.value);
	    console.log(user.valid);
	    // this._postService.createUser(user.value)
     //        .subscribe( (resUserData) => this.user = (resUserData));

  	}
}

