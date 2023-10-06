package com.educlaas.dea.merrymeals.payload;

import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.dao.Volunteer;

public class UserVolunteerDto {
    private Users user;
    private Volunteer volunteer;

    public UserVolunteerDto(Users user, Volunteer volunteer) {
        this.user = user;
        this.volunteer = volunteer;
    }

    public Users getUser() {
        return this.user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Volunteer getVolunteer() {
        return this.volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

}
