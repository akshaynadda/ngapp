import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  GetData()
  {
    return this.http.get("http://localhost:4000/emps");
  }

  GetDataByID(No)
  {
    return this.http.get("http://localhost:4000/emps/" + No );
  }

  UpdateData(empObject)
  {
    return this.http.put("http://localhost:4000/emps/"+ empObject.No,empObject);
  }
  AddData(empObject)
  {
    return this.http.post("http://localhost:4000/emps",empObject);
  }

  DeleteData(No)
  {
    return this.http.delete("http://localhost:4000/emps/" + No);
  }
}

