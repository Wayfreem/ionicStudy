import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  messageTabBadge: number = 0;

  messageList = [];
  items = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events) {

    setTimeout(()=>{
      this.changeMessageTabBadge();
    }, 5000);

  }

  ionViewDidLoad() {
    this.messageList = this.getMessage();
    this.items = this.getAccordionList();
  }

  changeMessageTabBadge(){
    this.messageTabBadge = 20;

    this.events.publish('messageTabBadge:change',this.messageTabBadge, Date.now());
  }

  getMessage() {
    return [
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

  getAccordionList() {
    return [
      {
        name: '服务类',
        data: [
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
        ]
      },
      {
        name: '商务类',
        data: [
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
        ]

      },
      {
        name: '行政类',
        data: [
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
        ]
      },
      {
        name: '其他',
        data: [
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
        ]
      }
    ];
  }

}
