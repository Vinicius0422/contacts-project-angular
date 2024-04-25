import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'new', component: FormComponent },
  { path: 'update', component: FormComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
