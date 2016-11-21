import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Contacts as DeviceContacts } from 'ionic-native';
import { Transliter } from '../../services/transliter';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Generated class for the Contacts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class Contacts {

  translit: any = new Transliter();
  contacts:any = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,private _DomSanitizationService: DomSanitizer) {}

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    DeviceContacts.find(['*']).then((cont) => {
      loading.dismiss();
      for (let key in cont) {
        let contact = cont[key];
        if (contact.phoneNumbers == null)
          continue;
        else {
          contact.avatar='';
          let trans = this.translit.getNameForAvatar(contact.displayName);
          contact.shortName = trans;
          if (contact.photos !== null) {
            let photo = contact.photos[0];
            contact.avatar = photo.value;
          }
          this.contacts.push(contact);
        }
      }
    });

  }

}
