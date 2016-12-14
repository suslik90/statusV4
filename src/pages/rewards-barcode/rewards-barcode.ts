import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RewardsBarcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rewards-barcode',
  templateUrl: 'rewards-barcode.html'
})
export class RewardsBarcodePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RewardsBarcodePage Page');
  }

}
