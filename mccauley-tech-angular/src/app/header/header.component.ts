import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerIcon: string = '../assets/site-icon-512.png'

  portfolioUrl: string = 'https://mccauley.tech/portfolio';
  resumeUrl: string = 'https://mccauley.tech/resume';
  contactUrl: string = 'https://mccauley.tech/contact';

  codepenUrl: string = 'https://codepen.io/cdmccauley/';
  freeCodeCampUrl: string = 'https://www.freecodecamp.org/cdmccauley';
  githubUrl: string = 'https://github.com/cdmccauley';
  linkedInUrl: string = 'https://www.linkedin.com/in/mccauleytech/';
  wordpressUrl: string = '';

  constructor() { }

  ngOnInit() {
  }

}
