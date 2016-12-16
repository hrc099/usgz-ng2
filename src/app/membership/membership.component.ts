import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import { MembershipService } from './membership.service';
import { Member } from '../member';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  private members: Member[];

  constructor(private membershipService: MembershipService, 
  private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.membershipService.getMembers().subscribe(members => {
      this.members = members;
    });
    this.scrollToMain();
  }

  public scrollToMain(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  }

}
