import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messageList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.messageList = this.getMessage();
  }

  getMessage() {
    return [
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"My Neighbor Totoro",
        description: "Hayao Miyazaki • 1988",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"Raiders of the Lost Ark",
        description: "Steven Spielberg • 1981",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"Ghostbusters",
        description: "Ivan Reitman • 1984",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"Batman",
        description: "Tim Burton • 1988",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"Back to the Future",
        description: "Robert Zemeckis • 1985",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"The Empire Strikes Back",
        description: "Irvin Kershner • 1980",
        buttonText: "查看"
      },
      {
        src: "assets/img/contact/thumbnail-totoro.png",
        label:"The Terminator",
        description: "James Cameron • 1984",
        buttonText: "查看"
      },
    ];
  }

}
