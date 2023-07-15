import { Routes } from '@angular/router';

export function getRoutes(): Routes {
  if (window.innerWidth > 768) {
    return [
      {
        path: '',
        loadComponent: () => import('./components/big-home/big-home.component').then(mod => mod.BigHomeComponent),
        children:[
          {
            path:'',
            loadComponent: () => import('./components/profile/profile.component').then(mod => mod.ProfileComponent),
          },
          {
            path:'home',
            loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent),
          }
        ]
      }
    ];
  } else {
    return [
      {
        path: '',
        loadComponent: () => import('./components/small-home/small-home.component').then(mod => mod.SmallHomeComponent),
      }
    ];
  }
}
