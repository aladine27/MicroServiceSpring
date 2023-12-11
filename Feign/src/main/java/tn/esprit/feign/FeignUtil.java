package tn.esprit.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.feign.entites.*;

import java.util.List;
import java.util.Set;

@FeignClient (name = "microconn",url = "http://localhost:8085")
public interface FeignUtil {
    @GetMapping("/chambre/all-chambres")
    public List<Chambre> getChambres() ;
    @GetMapping("/chambre/retrieve/{chambre-id}")
    public Chambre retrieveChambre(@PathVariable("chambre-id") Long chId) ;
    @GetMapping("/chambre/search/{nombloc}")
    public Set<Chambre> search(@PathVariable("nombloc") String nombloc);
    @PostMapping("/chambre/add")
    public Chambre addChambre(@RequestBody Chambre c) ;
    @DeleteMapping("/chambre/remove/{chambre-id}")
    public void removeChambre(@PathVariable("chambre-id") Long chId);
//    @CrossOrigin(origins = "http://localhost:4200", methods = RequestMethod.PUT)
    @PutMapping("/chambre/modify")
    public Chambre modifyChambre(@RequestBody Chambre c) ;
    @GetMapping("/chambre/{chambreId}/bloc")
    public ResponseEntity<Bloc> getBlocByChambreId(@PathVariable long chambreId);


    @PostMapping("/bloc/add")
    public Bloc add(@RequestBody Bloc b);
    @GetMapping("/bloc/all-blocs")
    public List<Bloc> getBlocs();
    @GetMapping("/bloc/retrieve/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bcId);
    @PutMapping("/bloc/modify")
    public Bloc modifyBloc(@RequestBody Bloc b);
    @DeleteMapping("/bloc/remove/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id")Long bcId);


    @GetMapping("/etudiant/all-etudiants")
    public List<Etudiant> getEtudiants();
    @GetMapping("/etudiant/retrieve/{etudiant-id}")
    public Etudiant retrieveEtudiant(@PathVariable("etudiant-id") Long edId);
    @PostMapping("/etudiant/add")
    public Etudiant addEtudiant(@RequestBody Etudiant e );
    @DeleteMapping("/etudiant/remove/{etudiant-id}")
    public void removeEtudiant(@PathVariable("etudiant-id")Long edId);
    @PutMapping("/etudiant/modify")
    public Etudiant modifyEtudiant(@RequestBody Etudiant e);
    @GetMapping("/etudiant/{idEtudiant}/reservations")
    public ResponseEntity<List<Reservation>> getReservationsForEtudiant(@PathVariable Long idEtudiant) ;


    @GetMapping("/foyer/all")
    public List<Foyer> getFoyers();
    @GetMapping("/foyer/retrieve/{foyer-id}")
    public Foyer retrieveFoyer(@PathVariable("foyer-id") Long fyId);
    @PostMapping("/foyer/add")
    public Foyer addFoyer(@RequestBody Foyer f );
    @DeleteMapping("/foyer/remove/{foyer-id}")
    public void removeFoyer(@PathVariable("foyer-id")Long fyId);
    @PutMapping("/foyer/modify")
    public Foyer modifyFoyer(@RequestBody Foyer f);
}
