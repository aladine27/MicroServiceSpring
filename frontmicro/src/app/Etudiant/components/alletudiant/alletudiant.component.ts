import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { etudiant } from 'src/app/models/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alletudiant',
  templateUrl: './alletudiant.component.html',
  styleUrls: ['./alletudiant.component.css']
})
export class AlletudiantComponent implements OnInit {
  etudiants: etudiant[] = [];
  searchQuery: string = '';

  constructor(private etudiantServiceService: EtudiantService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.loadEtudiants();
  }

  navigateToUpdate(student: etudiant): void {
    this.router.navigate(['/students/update', student.idEtudiqnt]);
  }

  loadEtudiants() {
    this.etudiantServiceService.getEtudiants().subscribe(
      (data: etudiant[]) => {
        this.etudiants = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des étudiants:', error);
      }
    );
  }


    deleteStudent(id: number): void {
      console.log(id);
      this.etudiantServiceService.deleteStudent(id).subscribe(
        response => {
          console.log('Etudiant deleted successfully', response);
          // Add any additional logic after successful deletion
        },
        error => {
          console.error('Error deleting etudiant', error);
          // Handle error here
        }
      );
    }

  onSearchChange(): void {
    if (this.searchQuery.trim() !== '') {
      this.etudiantServiceService.searchEtudiants(this.searchQuery).subscribe(
        data => {
          this.etudiants = data;
        },
        error => {
          console.error('Error fetching search results', error);
          // Optionally, you can add more detailed error handling here
        }
      );
    } else {
      // If the search query is empty, reload all students
      this.loadEtudiants();
    }
  }

}
