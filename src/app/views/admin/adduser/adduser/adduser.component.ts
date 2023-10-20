import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{
  constructor(private ds:DataService, private route:Router){

  }
  ngOnInit(): void {
  }
  add(f:any){
    let data= f.value
    //console.log(data)
    //this.ds.addUser(data).subscribe(data=>console.log(data))

    this.ds.addUser(data).subscribe(data=>{
      this.route.navigate(['/admin/allusers'])
    },(err:HttpErrorResponse)=>{console.log(err.error)})
  }

}
