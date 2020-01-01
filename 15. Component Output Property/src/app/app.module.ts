import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { from } from 'rxjs';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { PasswordMatchValidatorDirective } from './shared/passwordmatch-validator.directive';
import { DisplayemployeeComponent } from './employee/displayemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    SelectRequiredValidatorDirective,
    PasswordMatchValidatorDirective,
    DisplayemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
