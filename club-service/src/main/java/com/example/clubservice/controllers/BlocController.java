package com.example.clubservice.controllers;

import com.example.clubservice.entites.Bloc;
import com.example.clubservice.services.IBlocService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bloc")
public class BlocController {
    @Autowired
    IBlocService blocService;

    @PostMapping("/add")
    public Bloc add(@RequestBody Bloc b){
        Bloc bloc = blocService.addBloc(b);
        return bloc;

    }
    @GetMapping("/all-blocs")
    public List<Bloc> getBlocs(){
        List<Bloc> listBlocs= blocService.AllBlocs();
        return listBlocs;
    }
    @GetMapping("/retrieve/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bcId){
        Bloc bloc = blocService.BlocById(bcId);
        return bloc;
    }
    @PutMapping("/modify")
    public Bloc modifyBloc(@RequestBody Bloc b){
        Bloc bloc = blocService.UpdateBloc(b);
        return bloc;
    }
    @DeleteMapping("/remove/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id")Long bcId){
        blocService.removeBloc(bcId);
    }


}
