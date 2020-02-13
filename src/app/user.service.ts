import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class UserService {
  private userUrl = "api/user";

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(this.userUrl);
  }
}