import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  employeeId: number;
  employeeFname: string;
  employeeLname: string;
  employeeEmail: string;
  employeeDept: string;
  employeeDesg: string;
  employeeDob: Date;
  employeeDoj: Date;
  
  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    const employeeData = {
      employee_id: this.employeeId,
      employee_firstname: this.employeeFname,
      employee_lastname: this.employeeLname,
      employee_email: this.employeeEmail,
      employee_department: this.employeeDept,
      employee_designation: this.employeeDesg,
      employee_dob: this.employeeDob,
      employee_doj: this.employeeDoj,
    
    };

    this.employeeService.signup(employeeData).subscribe(
      (response: string) => {
        // Handle the response here
        console.log(response);

        if (response) {
          // Handle successful signup
          console.log('Signup successful');
        } else {
          // Handle failed signup
          console.log('Signup failed');
        }
      },
      (error) => {
        // Handle HTTP error
        console.error('HTTP error:', error);
        // Handle failed signup
        console.error('Signup failed');
      }
    );

}
}
