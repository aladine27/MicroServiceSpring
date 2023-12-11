import { Component } from '@angular/core';
import { etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service'; // Import your data service
import { Router } from '@angular/router';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent {
  etudiant: etudiant = {
    idEtudiqnt: 0,
    nomet: '',
    prenomEtm: '',
    ecole: '',
    cin: 0,
    dateNaissance: new Date(),
    // ... other fields ...
  };

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  addEtudiant(): void {
    this.etudiantService.addStudent(this.etudiant).subscribe(
      response => {
        console.log('Etudiant added successfully', response);
        // Redirect to '/etudiant/all' after successful addition
        this.router.navigate(['/students/all']);
      },
      error => {
        console.error('Error adding etudiant', error);
        // Handle error here
      }
    );
  }
}
