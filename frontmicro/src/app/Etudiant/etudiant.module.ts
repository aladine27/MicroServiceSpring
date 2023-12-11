import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { FormsModule } from '@angular/forms';
import { AddetudiantComponent } from './components/addetudiant/addetudiant.component';
import { AlletudiantComponent } from './components/alletudiant/alletudiant.component';
import { UpdateetudiantComponent } from './components/updateetudiant/updateetudiant.component';



@NgModule({
  declarations: [
AddetudiantComponent,
AlletudiantComponent,
UpdateetudiantComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
