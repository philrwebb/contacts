import { Component, OnInit } from '@angular/core';
import { SchoolDto } from '../api/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {
  school: SchoolDto = {};
  constructor(route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.school = history.state.school;
  }

}
