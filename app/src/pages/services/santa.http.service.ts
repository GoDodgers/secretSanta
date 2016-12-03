import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SantaHttpService {
	
	constructor(private http: Http) {

	}

	getSantas() {
		return this.http.get('http://localhost:2222/santa')
			.map((response: Response) => response.json());
	}

	postSantas(secretSantaObj: any) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:2222/santa', JSON.stringify(secretSantaObj), { headers: headers })
			.map((data: Response) => data.json())
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.log(error);
		return Observable.throw(error);
	}
}