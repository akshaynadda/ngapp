import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp={No:0,Name:"",City:""};
  message;

  constructor(public routes:ActivatedRoute,
              public service:EmployeeService,
              public router:Router
    ) { }

  ngOnInit() {
    let paraArrStat = this.routes.paramMap;
    paraArrStat.subscribe((params)=>{
      let No=params.get("No");
      //console.log(params.get("No"));
      let empSearched= this.service.GetDataByID(No);
      empSearched.subscribe((result:any)=>{
        console.log(result);
        if(result.length>0)
        {
          this.emp=result[0];
          //this.message="Record Found!!";
        }
        else
        {
          this.message="Record Not Found!!";
        }
        
      })
    });
  }

  Update()
  {
    console.log("inside update");
    let statusOfUpdate=this.service.UpdateData(this.emp);
    statusOfUpdate.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['emplist']);
      }
      else
      {
        this.message="Something Went Wrong!!"
      }
    })
  }

}
