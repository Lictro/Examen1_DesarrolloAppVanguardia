import React, { Component } from 'react';
import { string, object, func } from 'prop-types';
import './Contact.css';

class Contact extends Component {
    render() {
    const { name, email, phone, twitter } = this.props;
    return (
      <div className="Contact">
        <h3>{name} - {email} - {phone} - {twitter}</h3>
      </div>
    );
  }
}

Contact.propTypes = {
  name: string,
  email: string,
  phone: string,
  twitter: string,
  votes: object,
  user: object,
  handleSelect: func,
  handleDeselect: func
};

export default Contact;
