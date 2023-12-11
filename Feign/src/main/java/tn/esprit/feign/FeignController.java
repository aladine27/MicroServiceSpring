package tn.esprit.feign;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.feign.entites.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/feignservices")
public class FeignController {
    @Autowired
    private  FeignUtil fu;
    @GetMapping("/chambre/all")
    public List<Chambre> getChambres() {
        return fu.getChambres();
    }
    @PostMapping("/chambre/add")
    public Chambre addChambre(@RequestBody Chambre c) {
        return fu.addChambre(c);
    }
    @GetMapping("/chambre/retrieve/{chambre-id}")
    public Chambre retrieveChambre(@PathVariable("chambre-id") Long chId) {
        return fu.retrieveChambre(chId);
    }
    @GetMapping("/chambre/search/{nombloc}")
    public Set<Chambre> search(@PathVariable("nombloc") String nombloc){
        return  fu.search(nombloc);
    }

    @DeleteMapping("/chambre/remove/{chambre-id}")
    public void removeChambre(@PathVariable("chambre-id") Long chId){
         fu.removeChambre(chId);
    }
    //    @CrossOrigin(origins = "http://localhost:4200", methods = RequestMethod.PUT)
    @PutMapping("/chambre/modify")
    public Chambre modifyChambre(@RequestBody Chambre c) {
        return  fu.modifyChambre(c);
    }
    @GetMapping("/chambre/{chambreId}/bloc")
    public ResponseEntity<Bloc> getBlocByChambreId(@PathVariable long chambreId){
        return fu.getBlocByChambreId(chambreId);
    }




    @PostMapping("/bloc/add")
    public Bloc add(@RequestBody Bloc b){
        return fu.add(b);
    }
        @GetMapping("/bloc/all")
    public List<Bloc> getBlocs(){
        return fu.getBlocs();
    }
    @GetMapping("/bloc/retrieve/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bcId){
        return fu.retrieveBloc(bcId);
    }
    @PutMapping("/bloc/modify")
    public Bloc modifyBloc(@RequestBody Bloc b){
        return  fu.modifyBloc(b);
    }
    @DeleteMapping("/bloc/remove/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id")Long bcId){
        fu.removeBloc(bcId);
    }

    @GetMapping("/etudiant/all")
    public List<Etudiant> getEtudiants(){
        return fu.getEtudiants();
    }
    @GetMapping("/etudiant/retrieve/{etudiant-id}")
    public Etudiant retrieveEtudiant(@PathVariable("etudiant-id") Long edId){
        return fu.retrieveEtudiant(edId);
    }
    @PostMapping("/etudiant/add")
    public Etudiant addEtudiant(@RequestBody Etudiant e ){
        return fu.addEtudiant(e);
    }
    @DeleteMapping("/etudiant/remove/{etudiant-id}")
    public void removeEtudiant(@PathVariable("etudiant-id")Long edId)
    {fu.removeEtudiant(edId);}
    @PutMapping("/etudiant/modify")
    public Etudiant modifyEtudiant(@RequestBody Etudiant e)
    { return  fu.modifyEtudiant(e);}
    @GetMapping("/etudiant/{idEtudiant}/reservations")
    public ResponseEntity<List<Reservation>> getReservationsForEtudiant(@PathVariable Long idEtudiant)
    {return fu.getReservationsForEtudiant(idEtudiant);}

    @GetMapping("/foyer/all")
    public List<Foyer> getFoyers(){return fu.getFoyers(); }
    @GetMapping("/foyer/retrieve/{foyer-id}")
    public Foyer retrieveFoyer(@PathVariable("foyer-id") Long fyId){return fu.retrieveFoyer(fyId);}
    @PostMapping("/foyer/add")
    public Foyer addFoyer(@RequestBody Foyer f ){return fu.addFoyer(f);}
    @DeleteMapping("/foyer/remove/{foyer-id}")
    public void removeFoyer(@PathVariable("foyer-id")Long fyId){fu.removeFoyer(fyId);}
    @PutMapping("/foyer/modify")
    public Foyer modifyFoyer(@RequestBody Foyer f){return fu.modifyFoyer(f) ;}


}
