import { Component, AfterViewChecked, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewChecked() {
    this.scrollToMain();
  }

  public scrollToMain(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  }

}
