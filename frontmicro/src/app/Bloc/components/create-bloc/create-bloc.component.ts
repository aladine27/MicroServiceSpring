import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';

@Component({
  selector: 'app-create-bloc',
  templateUrl: './create-bloc.component.html',
  styleUrls: ['./create-bloc.component.css']
})
export class CreateBlocComponent {
  bloc: Bloc  = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0
    // Add more properties as needed for the Bloc model
  };
  constructor(private blocService: BlocServiceService, private router: Router) {}

  addBloc(): void {
    this.blocService.createChambre(this.bloc).subscribe(
        response => {
            console.log('bloc added successfully', response);
            // Redirect to '/students/all' after successful addition
            this.router.navigate(['/bloc/all']);
        },
        error => {
            console.error('Error adding bloc', error);
            // Handle error here
        }
    );
}

}
