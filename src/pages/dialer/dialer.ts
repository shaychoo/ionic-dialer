import { Component } from '@angular/core';
import {CallNumber} from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dialer',
  templateUrl: 'dialer.html'
})
export class DialerPage {

  
  dialedNumber:string='';
  constructor(public navCtrl: NavController) {
    
  }

  dial(num:string){
    this.dialedNumber = this.dialedNumber +  num;
  }

  makeCall(){
    CallNumber.callNumber(this.dialedNumber, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }



}
