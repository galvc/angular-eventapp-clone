import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => this.user = data
    )
  }

}