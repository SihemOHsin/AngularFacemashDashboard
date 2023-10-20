import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllusers(){
    return this.http.get('http://localhost:3001/api/users')
  }

  addUser(profile:any){
    return this.http.post('http://localhost:3001/api/users/register',profile)
  }

  // deleteUser(id:any){
  //   return this.http.post('http://localhost:3001/api/user',id)
  // }
}
