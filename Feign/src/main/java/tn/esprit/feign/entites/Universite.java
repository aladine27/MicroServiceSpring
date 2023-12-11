package tn.esprit.feign.entites;

//import jakarta.persistence.*;

import java.io.Serializable;


public class Universite implements Serializable {
    private long idUniversite;
    private String nomUniversite;
    private String adresse;
    private Foyer foyer;
}
