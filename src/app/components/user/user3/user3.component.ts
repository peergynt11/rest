import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../../models/user.model';
import { User3Service } from '../../../services/user3.service';

@Component({
  selector: 'app-user',
  template: `
  <p>user3 works!</p>
  
  {{errorMsg}}
  
  <div *ngIf="users$ | async as users; else loadingOrError">
    <div *ngFor="let user of users">
      {{user.email}}
    </div>
  </div> 

  <ng-template #loadingOrError>
    <div *ngIf="loadingError$ | async; else loading">
      Error loading the list of users. Please try again later.
    </div>
 
    <ng-template #loading>
      Loading users...
    </ng-template>
  </ng-template>
    `,
})
export class User3Component implements OnInit {

  users$: Observable<User[]>;
  errorMsg: string

  constructor(private userService: User3Service ) { }

  ngOnInit(): void {
     this.users$ = this.getAllUsers()
  }

  // getAllUsers(): Observable<User[]> {
  //     // this.userService.getAllUsers().subscribe( (returnValue) => console.log(returnValue))
  //       return this.userService.getAllUsers()
  // } 
  getAllUsers(): Observable<User[]> {
    // this.userService.getAllUsers().subscribe( (returnValue) => console.log(returnValue))
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
