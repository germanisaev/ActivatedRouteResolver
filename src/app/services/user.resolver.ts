import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<any> {
   constructor(public userService: UserService) { }
   resolve(): Observable<any> {
      return this.userService.getUsers().pipe(
         catchError((error) => {
            return of('No data');
         })
      )
   }
}