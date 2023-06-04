import { Employees } from './../employees';
import { Component, OnInit } from '@angular/core';
import { DataEmployeesService } from '../data-employees.service';
import { NoRepeatePipe } from 'src/pipes/no-repeate.pipe';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {
employeesData:any[]=[] ;
removeDuplicatesArrayDepartment: Array<any>= [];
removeDuplicatesArrayExperience: Array<any>= [];
constructor(private _dataService:DataEmployeesService){


}
  ngOnInit() {
   this.getEmployees()

  }
  getEmployees(){
    this._dataService.getAllEmployees().subscribe((response: any)=>{
      this.employeesData = response
  
      this.removeDuplicatesArrayDepartment = this.removeDublicates(this.employeesData, "Department")

      this.removeDuplicatesArrayExperience = this.removeDublicates(this.employeesData, "Experience")
 


    })
  }

 removeDublicates(myArray: any[], Prop:any):any{
  return myArray.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[Prop]).indexOf(obj[Prop]) === pos;
  });
 }





submitForm(){
  console.log();
}
}

  


