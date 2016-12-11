import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleText(text: string, button: string): void {
    let x = document.getElementById(button);
    if (x.textContent === 'Pročitaj više ') {
      x.textContent = '';
      x.insertAdjacentHTML( 'afterbegin',
      'Pročitaj manje <i class="fa fa-angle-up" aria-hidden="true"></i>' );
    }
    else {
      x.textContent = '';
      x.insertAdjacentHTML( 'afterbegin', 
      'Pročitaj više <i class="fa fa-angle-down" aria-hidden="true"></i>' );
    }
    let a = document.getElementById(text);
    if (a.style.display === "block") {
      a.style.display = 'none';
    }
    else {
      a.style.display = "block";
    }
  }

}
