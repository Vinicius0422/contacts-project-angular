import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    ContactListComponent,
    NewComponent,
    UpdateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  exports: [
    ContactListComponent
  ]
})
export class ContactsModule { }
