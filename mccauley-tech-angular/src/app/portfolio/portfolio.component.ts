import { Component, OnInit } from '@angular/core';

import { PortfolioItem } from './portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[];

  constructor() { }

  ngOnInit() {
    this.portfolioItems = [
      new PortfolioItem(
        'Git Gud Games', 
        'https://tech-mccauley-ggg.herokuapp.com', 
        'http://via.placeholder.com/1920x1080/fff/000?text=landscape', 
        'http://via.placeholder.com/1080x1920/fff/000?text=portrait'
      ),
      new PortfolioItem(
        'Grace Hopper', 
        'https://codepen.io/cdmccauley/full/pdXaGK/', 
        'http://via.placeholder.com/1920x1080/fff/000?text=landscape', 
        'http://via.placeholder.com/1080x1920/fff/000?text=portrait'
      )
    ];
  }
}