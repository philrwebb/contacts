import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core'
import { ContactDto } from '../api/models/contact-dto'

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  @Input() contact: ContactDto = {} as ContactDto
  @Output() onUpdateContact: EventEmitter<ContactDto> = new EventEmitter<ContactDto>()
  constructor() {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.onUpdateContact.emit(this.contact)
  }
}
