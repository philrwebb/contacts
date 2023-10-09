import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateSchoolDto } from '../api/models';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {
  @Output() onAddSchool: EventEmitter<CreateSchoolDto> = new EventEmitter<CreateSchoolDto>();
  school: CreateSchoolDto = {} as CreateSchoolDto;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.school.schoolName === '' || this.school.schoolLocation === '') {
      alert('Please provide a School name and School Location')
      return
    }
    this.onAddSchool.emit(this.school)
    this.school = {} as CreateSchoolDto;
  }

}
