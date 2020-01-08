import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employees } from '../models/employees.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 private _id;
 employeedetail:any;
  constructor(private _route: ActivatedRoute,private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._id = +this._route.snapshot.paramMap.get('id');
    this.employeedetail = this._employeeService.getEmployeeListById(this._id);
    console.log(this.employeedetail[0]);
  }

}
