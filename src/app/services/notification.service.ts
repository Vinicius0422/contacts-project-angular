import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  handleResponse(response: any) {
    return response
  }

  handleError(error: HttpErrorResponse) {
    if(error.status == 404) {
      this.router.navigate(['/not-found'])
      this.toastr.error('Recurso não encontrado')
    } else {
      this.router.navigate(['/home'])
      this.toastr.error('Something went wrong, tell with suport')
    }
    return of()
  }
}
