import { ViewChild , Component } from '@angular/core';
import { Content, NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalChatDialog page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-chat-dialog',
  templateUrl: 'modal-chat-dialog.html'
})
export class ModalChatDialogPage {

  @ViewChild(Content) content: Content;
  Message:Array<{from:number, text:string}> = [];
  message:string = '';
  interlocutor:any;
  navPar:any;
  lastMessage:string;

constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
  this.navPar = params.data;
  this.interlocutor = this.navPar.interlocutor;
  this.Message.push({from:1, text:this.navPar.lastMessage.text});
  this.lastMessage = this.navPar.lastMessage;
}

  ionViewDidLoad() {
    console.log('Hello ModalChatDialogPage Page');
  }
  ionViewWillEnter(){
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  addMessage(message){
    let m:any = {from:0, text:message};
    this.message = '';
    this.Message.push(m);
    setTimeout(()=>{
     this.content.scrollToBottom(100);
      this.message = '';
    },100);
  }
  onFocusTextArea(e){
    setTimeout(()=>{
      this.content.scrollToBottom(100);
    },700);
  }
}
