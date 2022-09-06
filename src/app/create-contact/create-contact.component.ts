import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactCreateDto } from '../api/models/contact-create-dto';



@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<ContactCreateDto> = new EventEmitter<ContactCreateDto>();
  contact: ContactCreateDto = {} as ContactCreateDto;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contact.firstName === '' || this.contact.lastName === '') {
      alert('Please Provide a first name and last name for the Contact!')
      return
    }
    this.onAddContact.emit(this.contact)
    this.contact = {} as ContactCreateDto;
  }
}
