import { Component, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SantaHttpService } from '../services/santa.http.service';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [SantaHttpService]
})

export class HomePage {

	santaGroupName: string;
	@Input() totalSantas: string[] = ['Santa 1', 'Santa 2', 'Santa 3', 'Santa 4'];

	addSanta() {
		this.totalSantas.push(`Santa ${this.totalSantas.length + 1}`);
	}

	removeSanta() {
		if (this.totalSantas.length) {
			this.totalSantas.pop();
		}	
	}

	constructor(public navCtrl: NavController, private httpSanta: SantaHttpService) {

	}

	onSubmit(form: NgForm) {
		const secretSantaGroup = {
			[this.santaGroupName] : form.value
		};
		
		this.httpSanta.postSantas(secretSantaGroup)
			.subscribe(data => console.log(data));
	}

}
