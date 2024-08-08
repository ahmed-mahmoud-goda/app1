import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:"",component:StartComponent},
    {path:"Contact",component:ContactComponent},
    {path:"Portfolio",component:PortfolioComponent},
    {path:"About",component:AboutComponent},
    {path:"**",component:ErrorComponent}
];
