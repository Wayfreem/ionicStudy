import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-approval',
  templateUrl: 'approval.html',
})
export class ApprovalPage {

  tab1Root = 'ApprovalHomePage';
  tab2Root = 'ApprovalTodoPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
  }

}
