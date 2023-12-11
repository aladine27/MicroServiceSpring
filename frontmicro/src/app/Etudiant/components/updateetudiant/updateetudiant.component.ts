import { Component, OnInit } from '@angular/core'; // Import OnInit
import { ActivatedRoute, Router } from '@angular/router';
import { etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-updateetudiant',
  templateUrl: './updateetudiant.component.html',
  styleUrls: ['./updateetudiant.component.css']
})
export class UpdateetudiantComponent implements OnInit { // Implement OnInit
  student: etudiant = {
    idEtudiqnt: 0,
    nomet: '',
    prenomEtm: '',
    ecole: '',
    cin: 0,
    dateNaissance: new Date(),
    // ... other fields ...
  };

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void { // Use ngOnInit for initialization
    const id = parseInt(this.route.snapshot.params['id'], 10); // Get ID from route and parse it as a number
    if (id) {
      this.fetchStudent(id);
    }
  }

  fetchStudent(id: number): void {
    this.etudiantService.getStudentById(id).subscribe( // Correct method to fetch student data
      (data: etudiant) => {
        this.student = data;
      },
      error => {
        // Handle errors here
      }
    );
  }

updateStudent(): void {
  this.etudiantService.updateStudent(this.student).subscribe(
    response => {
      // Handle the response
      this.router.navigate(['/students/all']);
    },
    error => {
      // Handle errors
      console.error('Error during update:', error);
    }
  );
}

}
