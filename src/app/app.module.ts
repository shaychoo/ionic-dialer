import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DialerPage } from '../pages/dialer/dialer';
import { TabsPage } from '../pages/tabs/tabs';
import { Contacts } from 'ionic-native';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DialerPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DialerPage,
    TabsPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Contacts]
})
export class AppModule {}
