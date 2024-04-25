import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageableResponse } from '../../models/pageable.interface';
import { Contact } from 'src/app/models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl: string = 'http://localhost:8080/api/contacts'

  constructor(
    private http: HttpClient
  ) { }

  getAllContacts(currentPage: number, pageSize: number): Observable<PageableResponse<Contact>> {
    return this.http.get<PageableResponse<Contact>>(this.baseUrl, {
      params: {
        page: currentPage,
        size: pageSize
      }
    })
  }

  getContactsByParameter(parameter: string): Observable<PageableResponse<Contact>> {
    return this.http.get<PageableResponse<Contact>>(`${this.baseUrl}/findBy`, {
      params: {
        parameter: parameter
      }
    })
  }
}
