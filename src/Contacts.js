import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import map from 'lodash/map';
import './Contacts.css';


class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
      {map(contacts, (contact, key) =>
         <Contact key={key}{...contact} />)}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object
};

export default Contacts;