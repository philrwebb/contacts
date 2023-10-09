import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './modules/material/material.module';
import { ApiConfiguration } from './api/api-configuration';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ConfirmDialogComponent } from './Shared/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolsListComponent } from './schools-list/schools-list.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { MeterListComponent } from './meter-list/meter-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full'},
  { path: 'schools', component: SchoolsListComponent },
  { path: 'school-edit/:id', component: SchoolEditComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'meter-list', component: MeterListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CreateContactComponent,
    UpdateContactComponent,
    ConfirmDialogComponent,
    SchoolsListComponent,
    SchoolEditComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent,
    MeterListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private apiConfig: ApiConfiguration) {
    this.apiConfig.rootUrl = environment.apiUrl;
  }
}


