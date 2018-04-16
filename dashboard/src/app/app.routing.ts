import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


const APP_ROUTES: Routes = [
  {
    path: '', 
    redirectTo: 'search',
    pathMatch: "full"
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'update/:cpf',
    component: UpdateComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
