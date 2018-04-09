import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contactList = [];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.contactList = this.getContactData();
  }

  getContactData(){
    return [
      {
        src: "assets/img/contact/tortoise.png",
        name: "马爸爸",
      },
      {
        src: "assets/img/contact/tortoise.png",
        name: "老板",
      },
      {
        src: "assets/img/contact/tortoise.png",
        name: "CEO",
      },
      {
        src: "assets/img/contact/tortoise.png",
        name: "CTO",
      },
      {
        src: "assets/img/contact/tortoise.png",
        name: "COO",
      },
    ];
  }



}
