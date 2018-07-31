import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeAvatar: string = '../assets/profile-color-512.png';
  homeTitle: string = 'Chris McCauley - Software Developer';
  homeIntro: string = "Lifelong tech enthusiast and recent graduate from Davis Technical College's Information Technology program with an emphasis in Software Development. I have experience developing with Java, C#, PHP, HTML, CSS, and MySQL, for Linux, Windows, and Android. I have also spent time learning JavaScript, ES6, TypeScript, JQuery, React, Node, Angular, and Ruby and have earned certifications from CompTIA, Microsoft, and NDG. Please, have a look around to learn about me and my studies. Feel free to contact me with any questions.";

  constructor() { }

  ngOnInit() {
  }

}
