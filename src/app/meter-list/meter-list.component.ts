import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../api/services/school.service';
import { MetersService } from '../api/services/meters.service';
import { MeterDto } from '../api/models/meter-dto';
import { SchoolDto } from '../api/models/school-dto';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css'],
})
export class MeterListComponent implements OnInit {
  meters: MeterDto[] = [] as MeterDto[];
  meter: MeterDto = {} as MeterDto;
  oldMeter: MeterDto = {} as MeterDto;
  update = false as boolean;
  pagesize: number = 5;
  displayedColumns: string[] = [
    'meterId',
    'meterName',
    'meterType',
    'meterLocation',
    'meterStatus',
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

  constructor(private metersService: MetersService, private router: Router) {}

  ngOnInit(): void {
    this.getMeters();
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
    this.getMeters();
  }

  getMeters() {
    this.metersService
      .apiMetersGet$Json$Response({
        pageNumber: 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.meters = response.body as MeterDto[];
        console.log(this.meters);
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
  // saveSchool(school: CreateSchoolDto) {
  //   var errors: string[] = [];
  //   if (errors.length > 0) {
  //     alert(errors.join(' | '));
  //     return;
  //   }
  //   console.log(errors);
  //   if (errors.length == 0) {
  //     this.schoolsService
  //       .apiSchoolPost$Json({ body: school })
  //       .subscribe((newContact) => {
  //         this.getSchools();
  //       });
  //   }
  // }
  // updateSchool(school: SchoolDto) {
  //   var errors: string[] = [];
  //   if (errors.length > 0) {
  //     alert(errors.join(' | '));
  //     return;
  //   }
  //   console.log(errors);
  // }

  // onEdit(school: SchoolDto) {
  //   this.school = school;
  //   this.oldSchool = Object.assign({}, school);
  //   this.update = true;
  // }
  onNext() {
    this.metersService
    .apiMetersGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage + 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.meters = response.body as MeterDto[];
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
  onPrev() {
    this.metersService
    .apiMetersGet$Json$Response({
        pageNumber: this.xpagination.CurrentPage - 1,
        pageSize: this.pagesize,
      })
      .subscribe((response) => {
        this.meters = response.body as MeterDto[];
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

