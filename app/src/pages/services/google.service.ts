import { Injectable } from '@angular/core';
import { GooglePlus } from 'ionic-native';



@Injectable()
export class GoogleService {
	
	public userData;

	constructor() {
	}


	/*login() {
		window['plugins'].googleplus.login({
				//'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
				'webClientId': '428268134945-vn83de7ga86rcn78oi3bkq0n6s1kfarl.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
				'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
			}, (obj) => {
				console.log(JSON.stringify(obj)); // do something useful instead of alerting
			}, (msg) => {
				console.log('error: ' + msg);
			}
		);
	}*/
	
	login() {
		GooglePlus.login({})
		.then(
			(res) => {
				this.userData = res;
				console.log(this.userData);
			},
			(err) => {
				console.log('error');
				console.log(err);
			});
	}

	logout() {
		GooglePlus.logout().then(() => this.userData = null);
	}

}