import { Component, OnInit } from '@angular/core';

import { MembershipService } from './membership.service';
import { Member } from '../member';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  private members: Member[];

  constructor(private membershipService: MembershipService) {}

  ngOnInit() {
    this.membershipService.getMembers().subscribe(members => {
      this.members = members;
    });
  }

}
