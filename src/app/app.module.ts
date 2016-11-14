import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Settings } from '../pages/settings/settings';
import { Profile } from '../pages/profile/profile';
import { MyRewards } from '../pages/my-rewards/my-rewards';
import { RewardsLine } from '../pages/rewards-line/rewards-line';
import { Messages } from '../pages/messages/messages';
import { Transliter } from '../services/transliter';
import { ModalChatDialogPage } from '../pages/modal-chat-dialog/modal-chat-dialog';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Settings,
    Profile,
    MyRewards,
    RewardsLine,
    Messages,
    ModalChatDialogPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Settings,
    Profile,
    MyRewards,
    RewardsLine,
    Messages,
    ModalChatDialogPage
  ],
  providers: [Transliter]
})
export class AppModule {}
