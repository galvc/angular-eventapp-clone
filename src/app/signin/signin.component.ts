import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user; 
  savedEvents: number[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => this.user = data
    )
  }

}