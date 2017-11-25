import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {AccountRoutingModule} from './account-routing.module';
import {OpportunitiesComponent} from './opportunities.component';
import {BorrowerComponent} from './borrower.component';
import {HistoryComponent} from './history.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [AccountRoutingModule, CommonModule,
    FormsModule],
  declarations: [
    WalletComponent,
    OpportunitiesComponent,
    BorrowerComponent,
    HistoryComponent,
  ]
})
export class AccountModule {
}
