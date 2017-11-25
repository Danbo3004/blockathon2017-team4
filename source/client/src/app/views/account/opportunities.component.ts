import {Component, OnInit} from '@angular/core';
import {CreditService} from '../../services/credit.service';

@Component({
  templateUrl: './opportunities.component.html'
})
export class OpportunitiesComponent implements OnInit {
  listOpportunities: object[];

  constructor(private creditService: CreditService) {
  }
  ngOnInit(): void {
    this.creditService.getCredits({
      where: {
        status: 'created'//'readyToBid'
      }
    }, data => {
      this.listOpportunities = data;
    }, function (err) {
      console.log(err);
    })
  }
}
