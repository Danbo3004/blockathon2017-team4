import {Component, OnInit} from '@angular/core';
import {CreditService} from '../../services/credit.service';
import {AuthenticationService} from '../../services/authentication';

@Component({
  templateUrl: './borrower.component.html'
})
export class BorrowerComponent implements OnInit {
  listBorrowers

  constructor(private creditService: CreditService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const currentUserId = this.authenticationService.getUserId();

    this.creditService.getCredits({
      where: {
        status: {neq: 'done'},
        lenderId: (currentUserId) ? currentUserId : 0
      }
    }, data => {
      this.listBorrowers = data;
    }, function (err) {
      console.log(err);
    })
  }
}
