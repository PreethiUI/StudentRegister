import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentsService {

  constructor() { }

  getDepartments() {
    return ['Computer Science','Computer Information Systems','Aerospace','Chemical Engineering','Engineering Management','Electrical Engineering','Human Resources']
  }

}
