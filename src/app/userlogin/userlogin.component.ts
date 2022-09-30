import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logout } from './logout';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  logout: Logout = new Logout();

  constructor(private logoutService:LogoutService) { }
 
 
   ngOnInit(): void {
    
   }
 
   onSubmited(){
     const{userEmail,
       userPassword
      } = this.logout;
       
     this.logoutService.Logout(userEmail,
       userPassword
       ).subscribe({
       next: data => {
           console.log(data);
         
       
          
       }
     })
 
   }
   }
 
 