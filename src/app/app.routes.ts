import { Routes } from '@angular/router';
import { TrendingPageComponent } from './gifs/pages/trending-page/trending-page.component';
import { SearchPageComponent } from './gifs/pages/search-page/search-page.component';
import { DashboardPagesComponent } from './gifs/pages/dashboard-pages/dashboard-pages.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => DashboardPagesComponent,
    children: [
      {
        path: 'trending',
        loadComponent: () => TrendingPageComponent
      },
      {
        path: 'search',
        loadComponent: () => SearchPageComponent
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
