import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SecretSantaListPage } from '../pages/list/secretSantaListPage';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
	declarations: [
		MyApp,
		SecretSantaListPage,
		ContactPage,
		HomePage,
		TabsPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		FormsModule,
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		SecretSantaListPage,
		ContactPage,
		HomePage,
		TabsPage
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
