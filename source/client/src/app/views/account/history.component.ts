import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication';
import {CreditService} from '../../services/credit.service';

@Component({
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  listBorrowers

  constructor(private creditService: CreditService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const currentUserId = this.authenticationService.getUserId();

    this.creditService.getCredits({
      where: {
        status: 'done',
        lenderId: (currentUserId) ? currentUserId : 0
      }
    }, data => {
      this.listBorrowers = data;
    }, function (err) {
      console.log(err);
    })
  }
}
