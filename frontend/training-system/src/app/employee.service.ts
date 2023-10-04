import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private signupUrl = 'http://localhost:8080/signup'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  signup(employeeData: any): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<string>(this.signupUrl, employeeData, httpOptions);
  }
}
