package com.example.clubservice.services;

import com.example.clubservice.entites.Foyer;
import com.example.clubservice.repositories.FoyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FoyerService implements IFoyerService {
    @Autowired
    FoyerRepository foyerRep;
    @Override
    public List<Foyer> AllFoyers() {
        return foyerRep.findAll();
    }
    @Override
    public Foyer FoyerById(Long id) {
        return foyerRep.findById(id).get();
    }
    @Override
    public Foyer addFoyer(Foyer b) {
        return foyerRep.save(b);
    }
    @Override
    public void removeFoyer(long id) {
        foyerRep.deleteById(id);
    }
    @Override
    public Foyer UpdateFoyer(Foyer b) {
        return foyerRep.save(b);
    }
}
