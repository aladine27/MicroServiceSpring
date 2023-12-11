package tn.esprit.feign.entites;


import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;


@JsonInclude(JsonInclude.Include.NON_NULL)

public class Bloc implements Serializable {

    private long idBloc;
    private String nomBloc;
    private long capacityBloc;
    private Foyer foyer;

    private List<Chambre> chambres;
    public Bloc() {
    }

    // Getter and Setter methods for each field
    public long getIdBloc() {
        return idBloc;
    }

    public void setIdBloc(long idBloc) {
        this.idBloc = idBloc;
    }

    public String getNomBloc() {
        return nomBloc;
    }

    public void setNomBloc(String nomBloc) {
        this.nomBloc = nomBloc;
    }

    public long getCapacityBloc() {
        return capacityBloc;
    }

    public void setCapacityBloc(long capacityBloc) {
        this.capacityBloc = capacityBloc;
    }

    public Foyer getFoyer() {
        return foyer;
    }

    public void setFoyer(Foyer foyer) {
        this.foyer = foyer;
    }

    public List<Chambre> getChambres() {
        return chambres;
    }

    public void setChambres(List<Chambre> chambres) {
        this.chambres = chambres;
    }
}
