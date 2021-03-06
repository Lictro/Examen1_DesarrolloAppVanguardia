import React, {Component} from 'react';
import {object} from 'prop-types';
import './NewContact.css';
import { database } from './firebase';

class NewContact extends Component {
    state = {
      name: '',
      phone: '',
      email: '',
      twitter: '',
      belongsto: ''
    };

  contactsRef = database.ref('/contacts');

  handleSubmit = event => {
    event.preventDefault();
    this.contactsRef.push({
      name: this.state.name, 
      phone: this.state.phone, 
      email: this.state.email,
      twitter: this.state.twitter,
      belongsto: this.props.belong
    });
  }

  render() {
    const {name, email, phone, twitter} = this.state;

    return (
      <form className="NewContact">
        <input
          type="text"
          value={name}
          placeholder="Complete Name"
          onChange={(event) => this.setState({name: event.target.value})}/>
        <input
          type="text"
          value={phone}
          placeholder="Phone Number"
          onChange={(event) => this.setState({phone: event.target.value})}/>
        <input
          type="text"
          value={email}
          placeholder="E-Mail Address"
          onChange={(event) => this.setState({email: event.target.value})}/>
        <input
          type="text"
          value={twitter}
          placeholder="Twitter User"
          onChange={(event) => this.setState({twitter: event.target.value})}/>      
        <button onClick={this.handleSubmit} disabled={!name}>
          Submit
        </button>
      </form>
    );
  }
}

NewContact.propTypes = {
  contactsRef: object,
  belong: object
};

export default NewContact;
