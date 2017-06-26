import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from "@angular/core";
import { PostService } from './post.service';

@Component({
	selector: 'address',
	templateUrl: 'app/templates/address.template.html',
    providers: [PostService]
})

export class AddressComponent implements OnInit { 
	header = 'Addresses';
    name: string;
    users: any = [];
    errorMsg: string;

    constructor(private _postService: PostService){}
    
    ngOnInit(){
        this._postService.getUser()
            .subscribe( (resUserData) => this.users = (resUserData),
                        resUserError => this.errorMsg = resUserError);
    }
}