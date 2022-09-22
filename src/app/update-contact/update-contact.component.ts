import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild,
} from '@angular/core'
import { ContactDto } from '../api/models/contact-dto'

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  @Input() contact: ContactDto = {} as ContactDto
  @Output() onUpdateContact: EventEmitter<ContactDto> = new EventEmitter<ContactDto>()
  @ViewChild('f') f: any
  constructor() {}
  ngAfterViewInit() {
    this.f.form.valueChanges.subscribe((value: any) => {
      console.log(value)
    })
  }
  ngOnInit(): void {}
  onSubmit() {
    this.onUpdateContact.emit(this.contact)
  }
}
