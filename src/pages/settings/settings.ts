import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  User:{firstname:string,lastname:string,gender:number,interests:any[]}={firstname:'Петр',lastname:'Петров',gender:1,interests:[]};
  dateOfBirthday: any = 'Не указано';
  interestsIsFull: boolean = false;
  country:any = 'Россия';
  city:any = 'Сыктывкар';

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter(){
    // this.User.firstname='';
    // this.User.lastname='';
  }

  ionViewDidLoad() {
    console.log('Hello Settings Page');
  }
  openDataPicker(){
    console.log('open datapicker');
  }
  updateUserGender(gender){
    this.User.gender = gender;
  }
  addInterests(){
    if(this.User.interests.length < 3){
      let interes;
      switch (this.User.interests.length){
        case 0:
          interes='Дорогой алкоголь';
          break;
        case 1:
          interes='Спортивное питание';
          break;
        case 2:
          interes='Пицца';
          break;
      }

      let int:{name:string} = {name:interes};
      // int.name = interes;
      this.User.interests.push(int);
      if(this.User.interests.length == 3) this.interestsIsFull = true;else this.interestsIsFull = false;

    }else{
      this.interestsIsFull = true;
    }
  }
  deleteInteres(ind){
    this.User.interests.splice(ind, 1);
    this.interestsIsFull = false;
  }

}
