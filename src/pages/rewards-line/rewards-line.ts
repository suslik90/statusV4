import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RewardsDescriptionPage} from "../rewards-description/rewards-description";

/*
  Generated class for the RewardsLine page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rewards-line',
  templateUrl: 'rewards-line.html'
})
export class RewardsLine {

  rewards:any[];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    // console.log('Hello RewardsLine Page');
  }
  ionViewWillEnter() {
    this.loadPage();
  }


  loadPage(){
    this.rewards = [
      {
        id: 1,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 2,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 3,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      },
      {
        id: 4,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 5,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 6,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      },
      {
        id: 7,
        name: "Мода мода мода",
        using: false,
        img: "img/nike.jpg",
        category: {text: 'Кроссовки Nike', color: 'white'},
        color_line: 'indigo',
        time_to_end: '12:00:00'
      },
      {
        id: 8,
        name: "О здоровье",
        using: false,
        img: "img/milk.jpeg",
        category: {text: 'Молоко из под ...', color: 'white'},
        color_line: 'darkorange',
        time_to_end: '2:05:45'
      },
      {
        id: 9,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      }
    ];
  }

  openInfoReward(reward){
    this.navCtrl.push(RewardsDescriptionPage,reward);
  }

  addToMe(event:Event){
    // event.preventDefault();
    event.stopPropagation();//
    console.log('add');
  }
}
