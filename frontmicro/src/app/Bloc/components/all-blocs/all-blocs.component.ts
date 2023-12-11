import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';

@Component({
  selector: 'app-all-blocs',
  templateUrl: './all-blocs.component.html',
  styleUrls: ['./all-blocs.component.css']
})
export class AllBlocsComponent implements OnInit {
  blocs: any[] = []; // Initialisez le tableau dans le constructeur pour éviter l'erreur TS2564

  constructor(private router: Router,private blocServiceService: BlocServiceService) { }

  ngOnInit(): void {
    this.loadBlocs();
  }
  navigateToUpdate(ch: Bloc): void {
    this.router.navigate(['/bloc/update', ch.idBloc]);
  }
  deleteStudent(ch: Bloc): void {
    const isConfirmed = confirm('Are you sure you want to delete this student?');
    if (isConfirmed) {
      this.blocServiceService.deleteChambre(ch.idBloc).subscribe(
        response => {
          // Remove the deleted student from the etudiants array
          this.blocs = this.blocs.filter(e => e.idBloc !== ch.idBloc);
          // Optionally, display a success message
        },
        error => {
          // Handle error
        }
      );
    }
  }

  loadBlocs() {
    this.blocServiceService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des blocs:', error);
      }
    );
  }
}




