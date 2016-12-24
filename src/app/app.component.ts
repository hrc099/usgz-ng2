import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    PageScrollConfig.defaultDuration = 1000;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let nav = this.document.getElementById('header-nav');
    let scrolledHeight = this.document.body.scrollTop;
    let logo1 = this.document.getElementById('logo1');
    let logo2 = this.document.getElementById('logo2');
    if (scrolledHeight > 50) {
      nav.className = 'navbar navbar-fixed-top navbar-scroll';
      logo1.style.display = 'none';
      logo2.style.display = 'block';
    }
    else {
      nav.className = 'navbar navbar-fixed-top navbar-start';
      logo2.style.display = 'none';
      logo1.style.display = 'block';
    }
  }
}
