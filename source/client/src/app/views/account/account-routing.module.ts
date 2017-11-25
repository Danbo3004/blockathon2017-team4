import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WalletComponent} from './wallet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Account Pages'
    },
    children: [
      {
        path: 'wallet',
        component: WalletComponent,
        data: {
          title: 'Wallet'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
