import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Member } from '../member';

@Injectable()
export class MembershipService {

  private members;
  private url = 'app/members.json';

  constructor(private http: Http) {

  }

  getMembers(): Observable<Member[]> {
    return this.http.get(this.url)
    .map(res => res.json());
  }
}
