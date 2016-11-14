import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyRewards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-rewards',
  templateUrl: 'my-rewards.html'
})
export class MyRewards {

  rewardsFavorites:any[];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyRewards Page');
  }

  ionViewWillEnter() {
    this.loadPage();
  }


  loadPage(){
    this.rewardsFavorites = [
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
        id: 3,
        name: "Для девайса",
        using: false,
        img: "img/case.png",
        category: {text: 'Защита Iphone', color: 'white'},
        color_line: 'blue',
        time_to_end: '00:10:01'
      }
    ];

  }


}
