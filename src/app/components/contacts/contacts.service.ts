import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { PageableResponse } from '../../models/pageable.interface';
import { Contact } from 'src/app/models/contact.interface';
import { NotificationService } from 'src/app/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl: string = 'http://localhost:8080/api/contacts'

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) { }

  getAllContacts(currentPage: number, pageSize: number): Observable<PageableResponse<Contact>> {
    return this.http.get<PageableResponse<Contact>>(this.baseUrl, {
      params: {
        page: currentPage,
        size: pageSize
      }
    }).pipe(
      catchError((error: HttpErrorResponse) => this.notificationService.handleError(error))
    )
  }

  getContactsByParameter(parameter: string): Observable<PageableResponse<Contact>> {
    return this.http.get<PageableResponse<Contact>>(`${this.baseUrl}/findBy`, {
      params: {
        parameter: parameter
      }
    }).pipe(
      catchError((error: HttpErrorResponse) => this.notificationService.handleError(error))
    )
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => this.notificationService.handleError(error))
    )
  }
}
