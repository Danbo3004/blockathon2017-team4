import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {AccountRoutingModule} from './account-routing.module';

@NgModule({
  imports: [AccountRoutingModule],
  declarations: [
    WalletComponent
  ]
})
export class AccountModule {
}
