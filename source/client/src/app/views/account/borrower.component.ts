import {Component, OnInit} from '@angular/core';
import {CreditService} from '../../services/credit.service';
import {AuthenticationService} from '../../services/authentication';

@Component({
  templateUrl: './borrower.component.html'
})
export class BorrowerComponent implements OnInit {
  listBorrowers: object[];

  constructor(private creditService: CreditService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const currentUser = this.authenticationService.getUser();
    console.log(currentUser);

    this.creditService.getCredits({
      where: {
        status: 'lending',
        lenderId: currentUser.id
      }
    }, data => {
      this.listBorrowers = data;
    }, function (err) {
      console.log(err);
    })
  }
}
