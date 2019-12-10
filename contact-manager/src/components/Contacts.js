import React, { Component } from "react";
import PropTypes from "prop-types";

class Contacts extends Component {
  // Personal Note
  //   another way to validate- use static propTypes above render method
  //   static propTypes = {
  //     name: PropTypes.object.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired
  //   };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h2>Name : {name}</h2>
        <ul>
          <li>Email : {email}</li>
          <li>Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contacts;
