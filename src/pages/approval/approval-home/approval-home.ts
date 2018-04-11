import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-approval-home',
  templateUrl: 'approval-home.html',
})
export class ApprovalHomePage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalHomePage');
  }

  gotoListPage(event, item){
    console.log(item);
  }
}
