import { NgModule } from '@angular/core';
import { ChambreRoutingModule } from './chambre-routing.module';
import { AllChambreComponent } from './components/all-chambre/all-chambre.component';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';
import { UpdateChambreComponent } from './components/update-chambre/update-chambre.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AllChambreComponent,
    AddChambreComponent,
    UpdateChambreComponent,
  ],
  imports: [CommonModule,FormsModule,ChambreRoutingModule],
})
export class ChambreModule {}
