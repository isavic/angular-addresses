import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
	private _url = "./assets/mock-data/users.json";

	constructor(private _http: Http){

	}
	getUser() {
		return this._http.get(this._url)
			.map((response:Response) => response.json());
			
	}
	addUser(user) {
		return this._http.post(this._url, JSON.stringify(user))
			.map((response:Response) => response.json());
			
	}
}