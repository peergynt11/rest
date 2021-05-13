import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-user',
  template: `
  <p>user1 works!</p>
  {{ source$ | async }}
  `
})
export class User1Component implements OnInit {

  source$: Observable<number[]>;
  
  constructor() { }

  ngOnInit(): void {
    let source = of([1, 2, 3, 4, 5]);
    this.source$ = source
  }
}
