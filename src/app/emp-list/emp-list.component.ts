import { Component, OnInit } from '@angular/core';
import {ApicallService} from '../apicall.service'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  datas:any;
  subordinate:any;
  subordinate2:any;
  subordinate3:any;
  constructor(private api:ApicallService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((resp)=>{
      console.log(resp);
      this.datas=resp;
    })
  }

}
