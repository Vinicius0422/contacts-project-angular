import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';



@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactListComponent
  ]
})
export class ContactsModule { }
