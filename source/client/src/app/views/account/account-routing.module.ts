import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WalletComponent} from './wallet.component';
import {OpportunitiesComponent} from './opportunities.component';
import {BorrowerComponent} from './borrower.component';
import {HistoryComponent} from './history.component';

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
      },
      {
        path: 'opportunities',
        component: OpportunitiesComponent,
        data: {
          title: 'Opportunities'
        }
      },
      {
        path: 'borrower',
        component: BorrowerComponent,
        data: {
          title: 'Borrower'
        }
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          title: 'History'
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
