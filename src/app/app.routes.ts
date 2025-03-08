import { Routes } from '@angular/router';
import { DynamicSectionsComponent } from './assignment/dynamic-sections/dynamic-sections.component';

export const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },

  { path: 'example', loadChildren: () => import('./example/routes') },
  { path: 'assignment', component: DynamicSectionsComponent },
];
