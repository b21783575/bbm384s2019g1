package com.humbo.humbo2.repository;

import org.springframework.data.repository.CrudRepository;

import java.util.Set;

import com.humbo.humbo2.domain.HelpMessage;

public interface HelpMessageRepository extends CrudRepository<HelpMessage, Long>{
    
    Set<HelpMessage> findAll();
}
    
