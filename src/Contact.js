import React, { Component } from 'react';
import { string, object, func } from 'prop-types';
import './Contact.css';

class Contact extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="Contact">
        <h4>{name}</h4>
      </div>
    );
  }
}

Contact.propTypes = {
  name: string,
  votes: object,
  user: object,
  handleSelect: func,
  handleDeselect: func
};

export default Contact;
