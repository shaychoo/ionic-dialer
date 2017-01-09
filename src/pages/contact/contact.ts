import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {
contacts;
  constructor(public navCtrl: NavController
              ,platform: Platform) {
    platform.ready().then(() => {
      Contacts.find(['displayName']).then((res) => {
         this.contacts = res;
      });
    });
  }


}
