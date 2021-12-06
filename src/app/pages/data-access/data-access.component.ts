import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-data-access',
  templateUrl: './data-access.component.html',
  styleUrls: ['./data-access.component.scss']
})
export class DataAccessComponent implements OnInit {
  Condition = 1;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  ngOnInit() {}

  ShowRole(){
    this.Condition = 1;
  }

  ShowPermission(){
    this.Condition = 2;
  }

  ShowDataAccess(){
    this.Condition = 3;
  }
  
}
