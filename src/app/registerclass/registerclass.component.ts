import { Component, OnInit, Input} from '@angular/core';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-registerclass',
  templateUrl: './registerclass.component.html',
  styleUrls: ['./registerclass.component.css']
})
export class RegisterclassComponent implements OnInit {

  departments;
  firstname;
  lastname;
  email;
  department;
  course;
  allInputs;

  constructor(service : DepartmentsService) {
    this.departments = service.getDepartments();
  }

  onSubmit() {
    alert("Registered");
  }

  validateFirstName(firstname) {
    firstname ? this.firstname= true : this.firstname = false;
  }

  validateLastName(lastname) {
    lastname ? this.lastname= true : this.lastname = false;
  }

  validateEmail(email) {
    email ? this.email= true : this.email = false;
  }

  validateDepartment(department) {
    department ? this.department= true : this.department = false;
  }

  validateCourse(course) {
    course ? this.course= true : this.course = false;
  }

  validateSubmit() {
    if(this.lastname && this.firstname && this.email && this.department && this.course) {
      this.allInputs = true;
    }
    else{
      this.allInputs = false;
    }
    return this.allInputs;
  }


  ngOnInit() {
  }

}
