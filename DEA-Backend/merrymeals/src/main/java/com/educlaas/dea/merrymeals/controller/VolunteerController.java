package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.repository.UsersRepository;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;

@RestController
@RequestMapping("/volunteer")
public class VolunteerController {
    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/all")
    public List<Volunteer> getVolunteer() {
        return volunteerRepository.findAll();
    }

    @GetMapping("/{volunteerId}")
    public Optional<Volunteer> getVolunteerId(@PathVariable Long volunteerId) {
        return volunteerRepository.findById(volunteerId);
    }

    @DeleteMapping("/{volunteerId}")
    private ResponseEntity<String> deleteVolunteer(@PathVariable long volunteerId) {
        try {
            Optional<Volunteer> optionalVolunteer = volunteerRepository.findById(volunteerId);

            if (optionalVolunteer.isPresent()) {
                Volunteer volunteer = optionalVolunteer.get();
                Users user = volunteer.getUser();

                volunteer.setUser(null);
                volunteerRepository.delete(volunteer);
                usersRepository.delete(user);
                return ResponseEntity.ok("Volunteer deleted successfully");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting volunteer");
        }
    }
    
    @PutMapping("/update/{volunteerId}")
    public ResponseEntity<String> updateVolunteer(@PathVariable long volunteerId,@RequestBody Volunteer volunteerUpdate) {
        try {
            Optional<Volunteer> optionalVolunteer = volunteerRepository.findById(volunteerId);
            if (optionalVolunteer.isPresent()) {
                Volunteer volunteer = optionalVolunteer.get();
                Users user = volunteer.getUser();
                user.setEmail(volunteerUpdate.getUser().getEmail());
                user.setIsApproved(volunteerUpdate.getUser().getIsApproved());
                volunteer.setUser(null);
                volunteer.setFirstName(volunteerUpdate.getFirstName());
                volunteer.setLastName(volunteerUpdate.getLastName());
	                volunteer.setContactNumber(volunteerUpdate.getContactNumber());
	                volunteer.setDob(volunteerUpdate.getDob());
                volunteer.setGroupName(volunteerUpdate.getGroupName());
                volunteer.setLatitude(volunteerUpdate.getLatitude());
                volunteer.setLongitude(volunteerUpdate.getLongitude());
                volunteer.setRepresentingGroup(volunteerUpdate.getRepresentingGroup());
                volunteer.setStation(volunteerUpdate.getStation());
                volunteer.setUser(user);
                usersRepository.save(user);
                volunteerRepository.save(volunteer);
                return ResponseEntity.ok("Volunteer successfully updated!");
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating volunteer");
        }
    }
    
}
