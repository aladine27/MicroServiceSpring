package com.example.clubservice.services;

import com.example.clubservice.entites.Bloc;


import java.util.List;

public interface IBlocService {
    public List<Bloc> AllBlocs();
    public Bloc BlocById(Long id);
    public Bloc addBloc(Bloc b);
    public void removeBloc(long id);
    public Bloc UpdateBloc(Bloc b);

}
