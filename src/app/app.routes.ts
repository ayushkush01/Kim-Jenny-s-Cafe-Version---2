import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Journal } from './pages/journal/journal';
import { Visit } from './pages/visit/visit';
import { Contact } from './pages/contact/contact';
import { OurStoryComponent } from './pages/our-story/our-story';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'about', component: Journal },
  { path: 'location', component: Visit },
  { path: 'contact', component: Contact },
  { path: 'journal', redirectTo: 'about', pathMatch: 'full' },
  { path: 'visit', redirectTo: 'location', pathMatch: 'full' },
];
