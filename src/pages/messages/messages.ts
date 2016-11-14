import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalChatDialogPage } from '../modal-chat-dialog/modal-chat-dialog';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class Messages {

  dialogs:any[];
  ModalDialogPage:any = ModalChatDialogPage;

  constructor(public nav: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Messages Page');
  }
  ionViewWillEnter(){
    this.loadPage();
  }

  getParams(interlocutor, lastMessage){
    let param:any = {interlocutor: interlocutor, lastMessage: lastMessage};
    return param;
  }

  loadPage(){
    this.dialogs = [
      {
        id:1,
        interlocutor:{
          id:666,
          displayName:'Иван Деревянко',
          avatar: '',
          shortName:'ID'
        },
        lastMessage:{
          id: 9999,
          text: 'Как мы будем завтра есть шаурму?',
          date: '30.06.2016 13:56'
        },
        unreadMessage : 5
      },
      {
        id:2,
        interlocutor:{
          id:667,
          displayName:'Аванасий Метро',
          avatar: '',
          shortName:'AM'
        },
        lastMessage:{
          id: 10000,
          text: 'Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?Вечером заеду, соньку заберу, ок?',
          date: '30.06.2016 10:01'
        },
        unreadMessage : 1
      },
      {
        id:3,
        interlocutor:{
          id:667,
          displayName:'Кай Метов',
          avatar: '',
          shortName:'KM'
        },
        lastMessage:{
          id: 10001,
          text: 'Position number 1. Отдыхаю Сам.',
          date: '01.01.2016 10:01'
        },
        unreadMessage : 0
      }
    ];
  }
  openDialog(params){
    console.log(params);
    let modal = this.modalCtrl.create(ModalChatDialogPage,{});
    modal.present();
    //let modal = Modal.create(ModalChatDialogsPage, params);
   // this.nav.present(modal);
  }
}
