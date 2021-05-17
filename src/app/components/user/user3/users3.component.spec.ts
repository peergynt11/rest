import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from '../../../models/user.model';
import { User3Service } from '../../../services/user3.service';
import { User3Component } from '../user3/user3.component';

describe('User3Component', () => {
  let component: User3Component;
  const fakeUsers: User[] = [{id:1, first_name:'fakeUser1', last_name:'fakeUser1', email: 'xxx'},
                             {id:2 , first_name:'fakeUser1', last_name:'fakeUser1', email: 'xxx'}]
  // const fakeUserService = {
  //   getUsers: () => of(fakeUsers),
  //   httpClient: {}
  // }as any
  const fakeUserService = jasmine.createSpyObj('userService', ['getAllUsers'])
  // const userService = new UsersService()

  beforeEach( () => {
    component = new User3Component(fakeUserService);
    // component = new UsersComponent(userService);
  });

  it('should have a User3Component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a list of users', () => {
    const spy = fakeUserService.getAllUsers.and.returnValue(of(fakeUsers))
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    component.users$.subscribe(users => {
    console.log(users);
    },
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
    )
    // expect().toEqual(fakeUsers);
  });
});
