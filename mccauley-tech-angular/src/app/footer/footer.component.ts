import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerIcon: string = '../assets/site-icon-512.png'

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
