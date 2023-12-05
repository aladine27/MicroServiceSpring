package com.example.clubservice.services;


import com.example.clubservice.entites.Foyer;

import java.util.List;

public interface IFoyerService {
    public List<Foyer> AllFoyers();
    public Foyer FoyerById(Long id);
    public Foyer addFoyer(Foyer b);
    public void removeFoyer(long id);
    public Foyer UpdateFoyer(Foyer b);

}
