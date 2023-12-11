import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-bloc',
  templateUrl: './modify-bloc.component.html',
  styleUrls: ['./modify-bloc.component.css']
})
export class ModifyBlocComponent implements OnInit {
  blocForm!: FormGroup;
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0,

  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blocService: BlocServiceService,
    private fb: FormBuilder
  ) {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capacityBloc: [0, Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.fetchch(id);
    }


  }

  fetchch(id: number): void {
    this.blocService.getChambre(id).subscribe(
      (data: Bloc) => {
        this.bloc = data;
        this.populateForm();
      },
      error => {
        console.error('Error fetching bloc', error);
      }
    );
  }

  populateForm(): void {
    this.blocForm.patchValue({
      nomBloc: this.bloc.nomBloc,
      capacityBloc: this.bloc.capacityBloc,
    });
  }

  updateForm(): void {
    if (this.blocForm.valid) {
      const updatedBloc: Bloc = {
        ...this.bloc,
        nomBloc: this.blocForm.get('nomBloc')?.value,
        capacityBloc: this.blocForm.get('capacityBloc')?.value,
      };

      this.blocService.updateChambre(updatedBloc).subscribe(
        () => {
          console.log('Bloc updated successfully');
          this.router.navigate(['/bloc/all']);
        },
        error => {
          console.error('Error during update:', error);
        }
      );
    }
  }
}
