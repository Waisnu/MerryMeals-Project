package com.educlaas.dea.merrymeals.configuration;

import java.util.ArrayList;
import java.util.List;

//Create OAuth2 class to use in application.yml
public class OAuth2 {
	private List<String> authorizedRedirectUris = new ArrayList<>();

    public List<String> getAuthorizedRedirectUris() {
        return authorizedRedirectUris;
    }

    public OAuth2 authorizedRedirectUris(List<String> authorizedRedirectUris) {
        this.authorizedRedirectUris = authorizedRedirectUris;
        return this;
    }
}
