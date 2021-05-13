import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  template: `
  <div *ngFor="let user of users$ | async">
    {{user.first_name}}<br>
  </div>
  `
})
export class User2Component implements OnInit {
  users$: Observable<User[]>;

  constructor() { }

  ngOnInit(): void {
    let users = [
      {
        "id": 1,
        "first_name": "Bernd",
        "last_name": "Vierhuf",
        "email": "bernd@vierhuf.de"
      },{
        "id": 2,
        "first_name": "Tim",
        "last_name": "Vierhuf",
        "email": "bernd@vierhuf.de"
      } ]
      this.users$ = of(users)
      const x = this.users$.subscribe(x => console.log(x))
    }
  }
