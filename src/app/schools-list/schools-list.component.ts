import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../api/services/school.service';
import { SchoolDto } from '../api/models/school-dto';
import { CreateSchoolDto } from '../api/models/create-school-dto';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css'],
})
export class SchoolsListComponent implements OnInit {
  schools: SchoolDto[] = [] as SchoolDto[];
  school: SchoolDto = {} as SchoolDto;
  oldSchool: SchoolDto = {} as SchoolDto;
  update = false as boolean;
  pagesize: number = 5;
  displayedColumns: string[] = [
    'schoolId',
    'schoolName',
    'schoolLocation',
    'schoolType',
    'noOfMeters',
    'actions',
  ];
  xpagination: {
    TotalItemCount: number;
    TotalPageCount: number;
    PageSize: number;
    CurrentPage: number;
  } = { TotalItemCount: 0, TotalPageCount: 0, PageSize: 0, CurrentPage: 0 };
  showNextPage: string = 'hidden';
  showPrevPage: string = 'hidden';

  constructor(private schoolsService: SchoolService, private router: Router) {}

  ngOnInit(): void {
    this.getSchools();
  }
  PageSize(value: number) {
    console.log(this.xpagination);
    if (value > 0) {
      if (this.pagesize <= this.xpagination.TotalItemCount) {
        this.pagesize++;
      }
    } else {
      if (this.pagesize > 1) {
        this.pagesize--;
      }
    }
    console.log(value, this.pagesize, this.xpagination.TotalItemCount);
    this.getSchools();
  }

  getSchools() {
    this.schoolsService
      .apiSchoolGet$Json$Response({
        pageNumber: 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.schools = response.body as SchoolDto[];
        console.log(this.schools);
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0]
        );
        this.showNextPage =
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
            ? 'visible'
            : 'hidden';
        this.showPrevPage =
          this.xpagination.CurrentPage > 1 ? 'visible' : 'hidden';
      });
  }
  saveSchool(school: CreateSchoolDto) {
    var errors: string[] = [];
    if (errors.length > 0) {
      alert(errors.join(' | '));
      return;
    }
    console.log(errors);
    if (errors.length == 0) {
      this.schoolsService
        .apiSchoolPost$Json({ body: school })
        .subscribe((newContact) => {
          this.getSchools();
        });
    }
  }
  updateSchool(school: SchoolDto) {
    var errors: string[] = [];
    if (errors.length > 0) {
      alert(errors.join(' | '));
      return;
    }
    console.log(errors);
  }

  onEdit(school: SchoolDto) {
    this.school = school;
    this.oldSchool = Object.assign({}, school);
    this.update = true;
  }
  onNext() {
    this.schoolsService
      .apiSchoolGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage + 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.schools = response.body as SchoolDto[];
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0]
        );
        if (
          this.xpagination.TotalPageCount > 1 &&
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
        ) {
          this.showNextPage = 'visible';
        } else {
          this.showNextPage = 'hidden';
        }
        if (this.xpagination.CurrentPage > 1) {
          this.showPrevPage = 'visible';
        } else {
          this.showPrevPage = 'hidden';
        }
      });
  }
  onSelectMeter(school: SchoolDto) {
    this.router.navigate(['/meter-list']);
  }
  onPrev() {
    this.schoolsService
      .apiSchoolGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage - 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.schools = response.body as SchoolDto[];
        this.xpagination = JSON.parse(
          response.headers.getAll('X-Pagination')![0]
        );
        if (
          this.xpagination.TotalPageCount > 1 &&
          this.xpagination.CurrentPage < this.xpagination.TotalPageCount
        ) {
          this.showNextPage = 'visible';
        } else {
          this.showNextPage = 'hidden';
        }
        if (this.xpagination.CurrentPage > 1) {
          this.showPrevPage = 'visible';
        } else {
          this.showPrevPage = 'hidden';
        }
      });
  }
}
