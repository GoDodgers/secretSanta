import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { NavController } from 'ionic-angular';
import { SantaHttpService } from '../services/santa.http.service';

@Component({
	selector: 'page-list',
	templateUrl: 'secretSantaListPage.html',
	providers: [SantaHttpService]
})

export class SecretSantaListPage implements OnInit {

	constructor(public navCtrl: NavController, private httpSanta: SantaHttpService) {

	}

	ngOnInit() {
		this.httpSanta.getSantas()
			.subscribe((data: Response) => console.log(data));
	}

}
