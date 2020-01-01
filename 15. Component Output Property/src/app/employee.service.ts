import { Injectable } from '@angular/core';
import { Employees } from './models/employees.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employees[] = 
  [
  { 
  username: 'Soumya', 
  email: 'soumya@gmail.com',
  password: '',
  confpassword: '',
  contactpreference: '',
  gender: 'Male', 
  isactive: true ,
  department: 'IT',
  photopath: 'assets/male.png'
},

{ 
  username: 'Suman', 
  email: 'suman@gmail.com',
  password: '',
  confpassword: '',
  contactpreference: '',
  gender: 'Male', 
  isactive: true ,
  department: 'IT',
  photopath: 'assets/male.png'
},
{ 
  username: 'Chiranjit', 
  email: 'crc @gmail.com',
  password: '',
  confpassword: '',
  contactpreference: '',
  gender: 'Male', 
  isactive: true ,
  department: 'IT',
  photopath: 'assets/male.png'
},
];
  constructor() { }

  getEmployeeList(): Employees[]{

    return this.employee;

  }

  save(employee: Employees) {
    // this.listEmployees.push(employee);
    this.employee.push(employee);
}
}
