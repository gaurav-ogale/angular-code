import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  deptName: string = '';
  deptNo: number = 0;
  location: string = '';
  resultMsg : string='' ;

  //departments =[["finance",1,"mumbai"],["IT",2,"mumbai"],["HR",3,"mumbai"]]

  departments = [
    {
      name: 'finance',
      no: 1,
      loc: 'Mumbai',
    },
    {
      name: 'IT',
      no: 2,
      loc: 'Mumbai',
    },
    {
      name: 'HR',
      no: 3,
      loc: 'Mumbai',
    },
  ];

  addDepartment() {
    let name = this.deptName;
    let no = this.deptNo;
    let loc = this.location;
    this.departments.push({name : this.deptName,no : this.deptNo,loc : this.location})
    this.resultMsg = `Department Added Successfully - ${this.deptName}`
  }
}
