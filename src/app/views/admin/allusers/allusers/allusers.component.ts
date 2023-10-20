import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  dataArray :any
  constructor(private ds:DataService){
    //test first
    //this.http.get('http://localhost:3001/api/users').subscribe(data=>console.log(data))
    //this.ds.getAllusers().subscribe(data=>console.log(data))

    this.ds.getAllusers().subscribe(data=>this.dataArray=data)
    

  }
  ngOnInit(): void {
    
  }
/* delete(id:any){
  this.ds.deleteUser(id).subscribe(data=>console.log(data))
} */

}
