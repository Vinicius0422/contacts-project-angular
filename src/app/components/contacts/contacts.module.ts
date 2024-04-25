import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DetailsComponent } from './details/details.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    ContactListComponent,
    DetailsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ContactListComponent
  ]
})
export class ContactsModule { }
