import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RewardsBarcodePage} from "../rewards-barcode/rewards-barcode";

/*
 Generated class for the RewardsDescription page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-rewards-description',
  templateUrl: 'rewards-description.html'
})
export class RewardsDescriptionPage {

  // reward = { id: number, name: string, using: boolean, img: string, category:<Object>{text: string, color: string}, color_line: string, time_to_end: string};
 public reward: { id: number, name: string, using: boolean, img: string, category: {text: string, color: string}, color_line: string, time_to_end: string};

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    this.reward = this.navParam.data;
  }

  ionViewDidLoad() {
  }
  showBarCode(){
    this.navCtrl.push(RewardsBarcodePage);
  }

  ionViewWillEnter() {

    // this.reward.img = 'lodj';
  }

}
