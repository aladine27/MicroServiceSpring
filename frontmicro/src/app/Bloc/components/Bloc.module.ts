import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBlocsComponent } from './all-blocs/all-blocs.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { ModifyBlocComponent } from './modify-bloc/modify-bloc.component';
import { blocRoutingModule } from './bloc-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllBlocsComponent,
    CreateBlocComponent,
    ModifyBlocComponent,

  ],
  imports: [
    CommonModule ,FormsModule,blocRoutingModule
  ]
})
export class ComponentsModule { }
