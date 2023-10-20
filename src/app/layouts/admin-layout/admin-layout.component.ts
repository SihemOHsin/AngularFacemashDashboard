import { Component } from '@angular/core';
import { AuthadminService } from 'src/app/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  name:any
   constructor(private adminServ:AuthadminService){
    this.name=localStorage.getItem('name')
   }
}
