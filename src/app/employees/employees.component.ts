import { Component, OnInit } from '@angular/core';
import { DataEmployeesService } from '../data-employees.service';
import { MatDialog } from '@angular/material/dialog';
import { FiltrationComponent } from '../filtration/filtration.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesArray:any=[]
  displayedColumns: string[] = ['name', 'Department', 'EmploymentDate','Salary','Experience'];
  dataSource = this.employeesArray;
constructor(private _dataService:DataEmployeesService , private  _dialog:MatDialog){

}
  ngOnInit(){
  

    this._dataService.getAllEmployees().subscribe((response: any)=>{
      this.employeesArray = response
      console.log(response);
    })
  }

  openFormDialog(){
    this._dialog.open(FiltrationComponent)
  }
}
