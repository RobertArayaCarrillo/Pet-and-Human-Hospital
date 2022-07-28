package com.cenfotec.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cenfotec.app.domain.Antologia;

public interface AntologiaRepository extends JpaRepository<Antologia, Long>{
    public List<Antologia> findByNombreContaining(String word);
}