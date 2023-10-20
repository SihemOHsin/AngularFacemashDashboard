import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  profileAdmin={
    name:'',
    role:''
  }

 
  isLoggedIn:boolean=false

  constructor(private http:HttpClient) { }

login(data:any){
  return this.http.post('http://localhost:3001/api/users/login',data)
}

saveDataProfile(tocken:any, name:any,role:any){
  localStorage.setItem('tocken',tocken)
  localStorage.setItem('role',role)
  localStorage.setItem('name',name)

  this.profileAdmin.name=name
  this.profileAdmin.role=role
  this.isLoggedIn=true

}
}
