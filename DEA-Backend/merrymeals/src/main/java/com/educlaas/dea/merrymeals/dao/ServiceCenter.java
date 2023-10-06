package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "service_center")
public class ServiceCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long scId;

    private String scName;
    private String scDetails;
    private String scLongitude;
    private String scLatitude;
    private String contactNumber;

    public String getContactNumber() {
        return this.contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public long getScId() {
        return this.scId;
    }

    public void setScId(long scId) {
        this.scId = scId;
    }

    public String getScName() {
        return this.scName;
    }

    public void setScName(String scName) {
        this.scName = scName;
    }

    public String getScDetails() {
        return this.scDetails;
    }

    public void setScDetails(String scDetails) {
        this.scDetails = scDetails;
    }

    public String getScLongitude() {
        return this.scLongitude;
    }

    public void setScLongitude(String scLongitude) {
        this.scLongitude = scLongitude;
    }

    public String getScLatitude() {
        return this.scLatitude;
    }

    public void setScLatitude(String scLatitude) {
        this.scLatitude = scLatitude;
    }

}
