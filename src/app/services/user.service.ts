// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('');
  user$ = this.user.asObservable();

  constructor() { }

  setUser(name: string) {
    this.user.next(name);
  }
}
