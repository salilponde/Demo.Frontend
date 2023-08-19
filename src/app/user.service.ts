import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll() {
    let url = "https://localhost:5000/user/list";
    return this.http.get(url);
  }
}
