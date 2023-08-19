import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(123);
    this.userService.getAll().subscribe(d => this.users = d);
  }

}
