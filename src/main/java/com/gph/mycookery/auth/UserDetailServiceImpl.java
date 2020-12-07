package com.gph.mycookery.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component("custom")
public class UserDetailServiceImpl implements UserDetailsService{

    @Autowired
    UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User curruser = repository.findByUsername(username);
        UserDetails user= new org.springframework.security.core.userdetails.User(username,curruser.getPasswordHash(), AuthorityUtils.createAuthorityList(curruser.getRole()));
        return user;
    }


}

