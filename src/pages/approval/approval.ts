import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApprovalTodoPage} from "./approval-todo/approval-todo";
import {ApprovalHomePage} from "./approval-home/approval-home";

/**
 * Generated class for the ApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval',
  templateUrl: 'approval.html',
})
export class ApprovalPage {

  tab1Root = ApprovalHomePage;
  tab2Root = ApprovalTodoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
  }

}
