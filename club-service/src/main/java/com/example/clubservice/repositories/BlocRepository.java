package com.example.clubservice.repositories;

import com.example.clubservice.entites.Bloc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BlocRepository extends JpaRepository <Bloc, Long> {

}
