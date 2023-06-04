
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEmployeesService {

  constructor(private _http:HttpClient) { }

getAllEmployees():any{
  return this._http.get('../assets/database/employees.json')
}
}
