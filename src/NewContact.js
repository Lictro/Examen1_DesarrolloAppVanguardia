import React, {Component} from 'react';
import {object} from 'prop-types';
import './NewContact.css';

class NewContact extends Component {
  constructor() {
    super();
    
    this.state = {
      name: '',
      phone: '',
      email: '',
      twitter: ''
    };

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {name, email, phone, twitter} = this.state;

    return (
      <form className="NewRestaurant">
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
  restaurantsRef: object
};

export default NewContact;
