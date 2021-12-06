import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-data-editor',
  templateUrl: './edit-data-editor.component.html',
  styleUrls: ['./edit-data-editor.component.scss']
})
export class EditDataEditorComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  ngOnInit() {}

}
