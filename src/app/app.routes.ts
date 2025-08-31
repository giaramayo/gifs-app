import { Routes } from '@angular/router';
import { DashboardPagesComponent } from './gifs/components/dashboard-pages/dashboard-pages.component';
import { TrendingPageComponent } from './gifs/components/trending-page/trending-page.component';
import { SearchPageComponent } from './gifs/components/search-page/search-page.component';

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
