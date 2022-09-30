import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const htttOptions={
  headers : new  HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  Logout(userEmail: string,userPassword:string): Observable<any>{
    return this.http.post('http://localhost:8080/userregistrations/login/{userEmail},{userPassword}?userEmail='+userEmail+'&userPassword='+userPassword,{
      userEmail,
      userPassword
      
      
    },htttOptions)
  }
  
  
  }
  
