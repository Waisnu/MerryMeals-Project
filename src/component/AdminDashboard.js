import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../css/AdminDashboard.css'
import MemberTable from './MemberTable';
import MealTable from './MealTable';
import VolunteerTable from "./VolunteerTable";
import MealOrderTable from "./MealOrderTable";

const AdminDashboard = (props) => {

  return (
    <div>
    <div class="container-fluid">
        <div class="row mar">
            <div class="col-3 sidebar">
                {/* <!-- Sidebar menu --> */}
                <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                    <li class="nav-item">
                        <h4 class="mt-4">Admin Dashboard</h4>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="member-management-tab" data-bs-toggle="pill" href="#member-management" role="tab" aria-controls="v-pills-member" aria-selected="true">Member Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="volunteer-management-tab" data-bs-toggle="pill" href="#volunteer-management" role="tab" aria-controls="v-pills-volunteer" aria-selected="false">Volunteer Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="meal-management-tab" data-bs-toggle="pill" href="#meal-management" role="tab" aria-controls="v-pills-meal" aria-selected="false">Meal Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="meal-order-tab" data-bs-toggle="pill" href="#meal-order" role="tab" aria-controls="v-pills-mealorder" aria-selected="false">Meal Order Management</a>
                    </li>
                </ul>
            </div>
            <div class="col-9 tab-content custom-tab">
                {/* <!-- Tab content --> */}
                <div class="tab-pane fade show active" id="member-management" role="tabpanel" aria-labelledby="member-management-tab">
                    <MemberTable/>
                    
                </div>
                <div class="tab-pane fade" id="volunteer-management" role="tabpanel" aria-labelledby="volunteer-management-tab">
                    <VolunteerTable/>
  
                </div>
                <div class="tab-pane fade" id="meal-management" role="tabpanel" aria-labelledby="meal-management-tab">
                    <MealTable/>

                </div>
                <div class="tab-pane fade" id="meal-order" role="tabpanel" aria-labelledby="meal-order-tab">
                    <MealOrderTable/>

                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
