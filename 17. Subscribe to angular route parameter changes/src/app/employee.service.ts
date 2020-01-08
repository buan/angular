import { Injectable } from '@angular/core';
import { Employees } from './models/employees.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employees;
  employee:Employees[] = 
  [
  { 
  id: 1,
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
  id: 2,
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
  id: 3,
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

  getEmployeeListById(id:number): Employees[]{

    return this.employee.filter(e => e.id === id);

  }


  save(employee: Employees) {
    // this.listEmployees.push(employee);
    this.employee.push(employee);
} 
}
