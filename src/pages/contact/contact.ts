import { Component } from '@angular/core';
import { Contacts,CallNumber } from 'ionic-native';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage  {
contacts;
isLoading = true;
  constructor(public navCtrl: NavController
              ,private platform: Platform) {
  this.getContacts();  
  }

  getContacts(filter=''){
      this.platform.ready().then(() => {
      Contacts.find(['displayName'],{hasPhoneNumber :true,filter:filter}).then((res) => {
         this.contacts = res;
         this.isLoading = false;
      });
    });
  }

  dial(contact){
    let phoneNumber = contact.phoneNumbers[0].value;
        CallNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
    });
  }


}
