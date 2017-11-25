import {Component} from '@angular/core';
import {CreditService} from '../../services/credit.service';

@Component({
  templateUrl: './opportunities.component.html'
})
export class OpportunitiesComponent {

  constructor(private creditService: CreditService) {
    creditService.getCredits({
    }, function (data) {
      console.log(data);
    }, function (err) {
      console.log(err);
    })
  }
}
