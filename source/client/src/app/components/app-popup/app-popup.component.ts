import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CreditService} from '../../services/credit.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html'
})
export class AppPopupComponent {
  closeResult: string;
  @Input() credit
  newRate

  constructor(private modalService: NgbModal, private creditService: CreditService, private toastr: ToastrService) {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(this.newRate);
      if (this.newRate < this.credit.rate) {
        this.creditService.bidCredit(this.credit.id, this.newRate, (data) => {
          this.toastr.success('Your bid is recorded');
          console.log(data)
        }, (err) => {
          console.log(err)
          this.toastr.error('Your bid is not recorded');
        })
      } else {
        this.toastr.error('You can not bit lower than current rate');
      }

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
