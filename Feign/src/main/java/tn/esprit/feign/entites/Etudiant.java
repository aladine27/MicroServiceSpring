package tn.esprit.feign.entites;


import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)

public class Etudiant implements Serializable {

    private long idEtudiqnt;
    private String nomet;
    private String prenomEtm;
    private long cin;
    private String ecole;
    private List<Reservation> reservations;

        private Date dateNaissance;
}
