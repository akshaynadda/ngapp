import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  message:string;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }

  Add(DataFromUI:any)
  {
    let resultstate=this.service.AddData(DataFromUI.form.value);
    resultstate.subscribe((data:any)=>{
      if(data.error==null)
      {
        this.message="Record Inserted !!";
      }
      else
      {
        console.log(data);
        this.message="Something Wrong !!";
      }

    });
  }
}
