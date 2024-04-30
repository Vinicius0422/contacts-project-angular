import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.interface';
import { PageableResponse } from 'src/app/models/pageable.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  parameter: string = '';
  lastParameter: string = '';
  currentPage: number = 0;
  contactsPerPage: number = 10;
  contactsResult!: Observable<PageableResponse<Contact>>;

  constructor(
    private contactsSerive: ContactsService
  ) { }

  ngOnInit(): void {
    this.loadContacts()
  }

  loadContacts() {
    this.contactsResult = this.contactsSerive.getAllContacts(this.currentPage, this.contactsPerPage)
  }

  onSearch() {
    if(this.parameter !== this.lastParameter){
      this.lastParameter = this.parameter
      this.contactsResult = this.contactsSerive.getContactsByParameter(this.parameter)
    }
  }

  onContactsPerPageChange() {
    this.currentPage = 0;
    this.loadContacts();
  }

  onCurrentPageChange(pageNumber: number) {
    if(pageNumber !== this.currentPage) {
      this.currentPage = pageNumber
      this.loadContacts()
    }
  }

  getPageNumbers(totalPages: number): number[] {
    return Array.from({length: totalPages}, (_, index) => index + 1)
  }
}
