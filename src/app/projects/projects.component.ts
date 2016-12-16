import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.scrollToMain();
  }

  public scrollToMain(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#main');
    this.pageScrollService.start(pageScrollInstance);
  }

  public toggleText(text: string, button: string): void {
    let x = document.getElementById(button);
    if (x.textContent === 'Pročitaj više ') {
      x.textContent = '';
      x.insertAdjacentHTML( 'afterbegin',
      'Pročitaj manje <i class="fa fa-angle-up" aria-hidden="true"></i>' );
    } else {
      x.textContent = '';
      x.insertAdjacentHTML( 'afterbegin', 'Pročitaj više <i class="fa fa-angle-down" aria-hidden="true"></i>' );
    }
    let a = document.getElementById(text);
    if (a.style.display === 'block') {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
    }
  }

}
