import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild,
} from '@angular/core';
import { SchoolDto } from '../api/models/school-dto';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css'],
})
export class UpdateSchoolComponent implements OnInit {
  @Input() school: SchoolDto = {} as SchoolDto;
  @Output() onUpdateSchool: EventEmitter<SchoolDto> =
    new EventEmitter<SchoolDto>();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    this.onUpdateSchool.emit(this.school);
  }
}
