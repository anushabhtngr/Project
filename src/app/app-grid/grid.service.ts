import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { appApiPaths } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http : HttpClient) { }

  getUserList(){
    return this.http.get(appApiPaths.getUserList);
  }
}
