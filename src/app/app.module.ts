import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { NoShowComponent } from './no-show/no-show.component';
//import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    NoShowComponent,
    //HomeComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:AppComponent},
      {path:"edit/:No",component:EditComponent},
      {path:"emplist",component:EmployeeListComponent},
      {path:"register",component:EmployeeRegisterComponent},
      {path:"**",component:NoShowComponent}
    ])
  ],
  providers: [EmployeeRegisterComponent,EmployeeListComponent,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
