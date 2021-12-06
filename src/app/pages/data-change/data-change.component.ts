import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-data-change',
  templateUrl: './data-change.component.html',
  styleUrls: ['./data-change.component.scss']
})
export class DataChangeComponent implements OnInit {

  modalRef: BsModalRef;
   constructor(private modalService: BsModalService) {}

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, { class: 'modal-xl' });
   }

   ngOnInit() {}
}
