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
        src: "assets/img/temp/tortoise.png",
        name: "马爸爸",
      },
      {
        src: "assets/img/temp/tortoise.png",
        name: "老罗",
      },
      {
        src: "assets/img/temp/tortoise.png",
        name: "脱不花",
      },
      {
        src: "assets/img/temp/tortoise.png",
        name: "李笑来",
      },
      {
        src: "assets/img/temp/tortoise.png",
        name: "吴军",
      },
    ];
  }



}
