import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.scrollToMain();
  }

  public scrollToMain(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  }

}
