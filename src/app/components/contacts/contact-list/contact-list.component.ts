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
    console.log("valor digitado:", this.parameter)
    console.log("valor digitado:", this.lastParameter)

    if(this.parameter !== this.lastParameter){
      this.lastParameter = this.parameter
      this.contactsResult = this.contactsSerive.getContactsByParameter(this.parameter)
    }
    this.contactsSerive.getContactsByParameter(this.parameter).subscribe(data => console.log(data))
  }

  onContactsPerPageChange() {
    console.log(this.contactsPerPage)
    this.currentPage = 0;
    this.loadContacts();
  }

  onCurrentPageChange(pageNumber: number) {
    console.log("page selected: " + pageNumber)
    console.log("current page:" + this.currentPage)
    if(pageNumber !== this.currentPage) {
      console.log("teste")
      this.currentPage = pageNumber
      this.loadContacts();
    }
  }

  getPageNumbers(totalPages: number): number[] {
    return Array.from({length: totalPages}, (_, index) => index + 1)
  }
}
