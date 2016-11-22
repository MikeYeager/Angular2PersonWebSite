import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonSearchComponent }   from './components/person/person-search.component';
import { PersonEditComponent }      from './components/person/person-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search',  component: PersonSearchComponent },
  { path: 'detail/:id', component: PersonEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
