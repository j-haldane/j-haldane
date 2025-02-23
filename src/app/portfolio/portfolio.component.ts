import { Component } from '@angular/core';
import { PortfolioSidenavComponent } from "./portfolio-sidenav/portfolio-sidenav.component";

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioSidenavComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
