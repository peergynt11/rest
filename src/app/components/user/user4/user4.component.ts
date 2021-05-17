import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user4',
  template: `<p>user4 works!</p><br>{{zahl}}<br>{{timer2$ | async}}<br>{{currentTime}}`
})
export class User4Component implements OnInit {

  hello$: Observable<any>
  timer1$: Observable<any> = timer(1000, 2000)
  timer2$: Observable<any> = timer(1000, 1000)
  timer3$: Observable<any> = timer(1000, 1000)
  zahl: string;
  currentTime: string;
  constructor() { }

  ngOnInit(): void {
    this.hello$ = new Observable( (observer) => {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });    
    this.getHello()
    this.initTimer()
  }

  getHello() {
    this.hello$.subscribe(val => console.log(val))
  }

  initTimer() {
    this.timer1$.pipe(map ( (val) => val + 10)).subscribe(x => this.zahl = x) 
    this.timer3$.subscribe( () => this.currentTime = new Date().toLocaleTimeString() )
  }
}
