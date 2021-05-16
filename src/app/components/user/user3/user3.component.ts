import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../../models/user.model';
import { User3Service } from '../../../services/user3.service';

@Component({
  selector: 'app-user',
  template: `
  <p>user3 works!</p>
  
  <code>observable|async
  
  </code> 

  {{errorMsg}}
  
  <div *ngIf="users$ | async as users">
    <div *ngFor="let user of users">
      {{user.email}}
    </div>
  </div> 
    `,
})
export class User3Component implements OnInit {

  users$: Observable<User[]>;
  errorMsg: string

  constructor(private userService: User3Service ) { }

  ngOnInit(): void {
    this.users$ = this.getAllUsers()
    this.getUsers();
    }

  getUsers(): void {
      this.userService.getAllUsers().subscribe ( 
       (returnValue) => console.log(returnValue),
        (err) => console.log("Message from User3Component: An error occured", err),
        () => console.log("Message from User3Component: Observing completed")
      )
  } 
  
  getUsers1(): void {
    this.userService.getAllUsers().subscribe ( 
      function (returnValue) { console.log(returnValue) },
      (err) => console.log("Message from User3Component: An error occured", err),
      () => console.log("Message from User3Component: Observing completed")
    )
} 
  getAllUsers(): Observable<User[]> {
      return this.userService
            .getAllUsers()
            .pipe(
                catchError(error => {
                  this.errorMsg = error 
                  return of([]);
                })
            )
  }
}
