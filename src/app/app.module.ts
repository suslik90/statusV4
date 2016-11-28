import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Settings } from '../pages/settings/settings';
import { Profile } from '../pages/profile/profile';
import { MyRewards } from '../pages/my-rewards/my-rewards';
import { RewardsLine } from '../pages/rewards-line/rewards-line';
import { Messages } from '../pages/messages/messages';
import { Transliter } from '../services/transliter';
import { ModalChatDialogPage } from '../pages/modal-chat-dialog/modal-chat-dialog';
import { Contacts } from '../pages/contacts/contacts';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Settings,
    Profile,
    MyRewards,
    RewardsLine,
    Messages,
    ModalChatDialogPage,
    Contacts,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Settings,
    Profile,
    MyRewards,
    RewardsLine,
    Messages,
    ModalChatDialogPage,
    Contacts,
    LoginPage
  ],
  providers: [Transliter, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
