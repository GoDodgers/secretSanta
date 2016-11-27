import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	@Input() totalSantas = ['Santa 1', 'Santa 2', 'Santa 3', 'Santa 4'];
	santas = {};

	addSanta() {
		this.totalSantas.push(`Santa ${this.totalSantas.length + 1}`);
	}

	removeSanta() {
		if (this.totalSantas.length) {
			this.totalSantas.pop();
		}
	}

	onSubmit(form: NgForm) {
		console.log(form);
	}

	constructor(public navCtrl: NavController) {

	}

}
