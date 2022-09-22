import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MaterialModule } from './modules/material/material.module'

import { AppComponent } from './app.component'
import { ContactsComponent } from './contacts/contacts.component'
import { CreateContactComponent } from './create-contact/create-contact.component'
import { UpdateContactComponent } from './update-contact/update-contact.component'
import { ConfirmDialogComponent } from './Shared/confirm-dialog/confirm-dialog.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CreateContactComponent,
    UpdateContactComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
