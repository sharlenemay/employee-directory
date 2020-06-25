import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getEmployee: function(employee) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getEmployeesList: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
