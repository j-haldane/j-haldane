import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { SplashComponent } from './splash/splash.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/about", pathMatch: 'full'
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "portfolio/:id",
        component: PortfolioComponent
    },
    {
        path: "**",
        redirectTo: "/about"
    },
];
