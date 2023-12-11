// foyer-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetudiantComponent } from './components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './components/updateetudiant/updateetudiant.component';

const routes: Routes = [
  { path: 'all', component: AddetudiantComponent },
  { path: 'add', component: AlletudiantComponent },
  { path: 'update/:id', component: UpdateetudiantComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
