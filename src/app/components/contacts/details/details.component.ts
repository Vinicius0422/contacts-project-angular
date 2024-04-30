import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable, switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  contact$!: Observable<Contact>

  constructor(
    private route: ActivatedRoute,
    private service: ContactsService
  ) {}

  ngOnInit(): void {
    this.contact$ = this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        return this.service.getContactById(id)
      })
    );
  }
}
