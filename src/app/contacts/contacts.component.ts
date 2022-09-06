import { Component, OnInit } from '@angular/core'
import { ContactsService } from '../api/services/contacts.service'
import { ContactDto } from '../api/models/contact-dto'
import { ContactCreateDto } from '../api/models/contact-create-dto'
import { faTimes, faEdit, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import { Operation } from '../api/models'
import { ConfirmDialogComponent } from '../Shared/confirm-dialog/confirm-dialog.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: ContactDto[] = [] as ContactDto[]
  contact: ContactDto = {} as ContactDto
  oldContact: ContactDto = {} as ContactDto
  faTimes = faTimes
  faEdit = faEdit
  faForward = faForward;
  faBackward = faBackward;
  update = false
  xpagination: {
    TotalItemCount: number
    TotalPageCount: number
    PageSize: number
    CurrentPage: number
  } = { TotalItemCount: 0, TotalPageCount: 0, PageSize: 0, CurrentPage: 0 }
  showNextPage: string = 'visible'
  showPrevPage: string = 'visible'
  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getContacts()
  }
  getContacts() {
    this.contactsService
      .apiContactsGet$Json$Response({
        pageNumber: 1,
        pageSize: 5
      })
      .subscribe((response) => {
        this.contacts = response.body as ContactDto[]
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0],
        )
        if (
          this.xpagination.TotalPageCount > 1 &&
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
        ) {
          this.showNextPage = 'visible'
        } else {
          this.showNextPage = 'hidden'
        }
        if (this.xpagination.CurrentPage > 1) {
          this.showPrevPage = 'visible'
        } else {
          this.showPrevPage = 'hidden'
        } 
      })
  }
  saveContact(contact: ContactCreateDto) {
    this.contactsService
      .apiContactsPost$Json({ body: contact })
      .subscribe((newContact) => {
        this.contacts = [newContact, ...this.contacts]
      })
  }
  onDelete(contact: ContactDto) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: 'Are you sure you want to delete this contact?',
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contactsService
          .apiContactsIdDelete({ id: contact?.contactId! })
          .subscribe()
        const contactsDeleted = this.contacts.filter(
          (c) => c.contactId !== contact.contactId,
        )
        this.contacts = contactsDeleted
      }
    })
  }
  onEdit(contact: ContactDto) {
    this.contact = contact
    this.oldContact = Object.assign({}, contact)
    this.update = true
  }
  CreatePatchDocument(oldContact: ContactDto, newContact: ContactDto) {
    var patchDocument: Operation[] = []
    if (oldContact.firstName !== newContact.firstName) {
      patchDocument.push({
        op: 'replace',
        path: '/firstName',
        value: newContact.firstName,
      })
    }
    if (oldContact.lastName !== newContact.lastName) {
      patchDocument.push({
        op: 'replace',
        path: '/lastName',
        value: newContact.lastName,
      })
    }
    if (oldContact.phone !== newContact.phone) {
      patchDocument.push({
        op: 'replace',
        path: '/phone',
        value: newContact.phone,
      })
    }
    if (oldContact.emailAddress !== newContact.emailAddress) {
      patchDocument.push({
        op: 'replace',
        path: '/emailAddress',
        value: newContact.emailAddress,
      })
    }
    return patchDocument
  }
  validateContact(result: ContactDto): string[] {
    var errors: string[] = []
    if (!(result!.firstName!.length > 2) || !(result!.lastName!.length > 2)) {
      errors.push('First and Last name must be longer than 2 characters')
    }
    //validate an international phone number
    var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/
    if (!phoneRegex.test(result!.phone!)) {
      errors.push('Phone number must be in international format')
    }
    //validate an email address
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailRegex.test(result!.emailAddress!)) {
      errors.push('Email address must be in valid format')
    }
    return errors
  }

  updateContact(result: ContactDto) {
    const errors = this.validateContact(result)
    if (errors.length > 0) {
      alert(errors.join(' | '))
      return
    }
    this.update = false
    const patchDocument = this.CreatePatchDocument(this.oldContact, result)
    this.contactsService
      .apiContactsContactIdPatch({
        body: patchDocument,
        contactId: result.contactId!,
      })
      .subscribe()
  }

  onNext() {
    this.contactsService
      .apiContactsGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage + 1,
        pageSize: 5,
      })
      .subscribe((response) => {
        this.contacts = response.body as ContactDto[]
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0],
        )
        if (
          this.xpagination.TotalPageCount > 1 &&
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
        ) {
          this.showNextPage = 'visible'
        } else {
          this.showNextPage = 'hidden'
        }
        if (this.xpagination.CurrentPage > 1) {
          this.showPrevPage = 'visible'
        } else {
          this.showPrevPage = 'hidden'
        }
      })
  }
  onPrev() {
    this.contactsService
      .apiContactsGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage - 1,
        pageSize: 5,
      })
      .subscribe((response) => {
        this.contacts = response.body as ContactDto[]
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0],
        )
        if (
          this.xpagination.TotalPageCount > 1 &&
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
        ) {
          this.showNextPage = 'visible'
        } else {
          this.showNextPage = 'hidden'
        }
        if (this.xpagination.CurrentPage > 1) {
          this.showPrevPage = 'visible'
        } else {
          this.showPrevPage = 'hidden'
        }
      })
  }
}
