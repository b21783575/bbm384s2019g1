package com.humbo.humbo2.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(exclude = "user")
public class Address{

    @Id @GeneratedValue
    private Long id;
    
    private String name;
    private String country;
    private String region;
    private String address;


    @ManyToOne(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    @JsonIgnore
    private CustomUser user;
}