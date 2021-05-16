import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User1Component } from './components/user/user1/user1.component';
import { User2Component } from './components/user/user2/user2.component';
import { User3Component } from './components/user/user3/user3.component';
import { User4Component } from './components/user/user4/user4.component';

const routes: Routes = [
  { path: 'user1', component: User1Component},
  { path: 'user2', component: User2Component},
  { path: 'user3', component: User3Component},
  { path: 'user4', component: User4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
