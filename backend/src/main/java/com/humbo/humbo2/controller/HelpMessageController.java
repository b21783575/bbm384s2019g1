package com.humbo.humbo2.controller;

import javax.validation.Valid;

import com.humbo.humbo2.domain.CustomUser;
import com.humbo.humbo2.domain.HelpMessage;
import com.humbo.humbo2.repository.CustomUserRepository;
import com.humbo.humbo2.repository.HelpMessageRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/help")
public class HelpMessageController {
private HelpMessageRepository helpRepo;
private CustomUserRepository customRepo;

HelpMessageController(HelpMessageRepository HelpRepository, CustomUserRepository customRepo){
    helpRepo = HelpRepository;
    this.customRepo = customRepo;
}
@GetMapping("")
public Iterable<HelpMessage> getHelpMessages() {
    return helpRepo.findAll();
}
@PostMapping("/create")
public ResponseEntity<?> postHelpMessage(@Valid@RequestBody HelpMessage message){
    CustomUser user = this.customRepo.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
    message.setUser(user);
    return ResponseEntity.ok().body(helpRepo.save(message));
}

}
