import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	numSantas = 4;
	totalSantas = ['Santa 1', 'Santa 2', 'Santa 3', 'Santa 4'];

	addSanta() {
		this.totalSantas.push(`Santa ${this.totalSantas.length + 1}`);
	}

	removeSanta() {
		if (this.totalSantas.length) {
			this.totalSantas.pop();
		}
	}

	constructor(public navCtrl: NavController) {

	}

}
