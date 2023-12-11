import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { etudiant } from '../models/etudiant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8051/etudiant'; // Update with your actual API URL

  constructor(private http: HttpClient) { }
  getEtudiants(): Observable<etudiant[]> {
    return this.http.get<etudiant[]>('http://localhost:8051/etudiant/all-etudiants');
  }
  addStudent(student: etudiant): Observable<any> {  // The return type can be any or specific based on your backend response
    const url = 'http://localhost:8051/etudiant/add';
    return this.http.post<any>(url, student); // 'student' is the data being sent to the backend
  }
  deleteStudent(id: number): Observable<any> {
    const url = `${this.apiUrl}/remove/${id}`;
    return this.http.delete(url);
  }
  updateStudent(student: etudiant): Observable<any> {
    const url = `http://localhost:8051/etudiant/modify`;
    return this.http.put(url, student);
  }

getStudentById(id: number): Observable<etudiant> {
  const url = `http://localhost:8051/etudiant/retrieve/${id}`;
  return this.http.get<etudiant>(url);
}

searchEtudiants(cin: string): Observable<etudiant[]> {

  return this.http.get<etudiant[]>(`${this.apiUrl}/search`, { params: { cin } });
}

}
