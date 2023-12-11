package tn.esprit.feign.entites;

//import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;
import java.util.List;


public class Reservation implements Serializable {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String idReservation;
    private Date annerUniversitaire;
    private boolean estValide;

    private List<Etudiant> etudiants;
}
