import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewContact from './NewContact'
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentUser: null,
    contacts: null
  };

  contactsRef = database.ref('/contacts');

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => { this.setState({ currentUser: currentUser }); });
    this.contactsRef.on('value', (snapshot) =>
      this.setState({
        contacts: snapshot.val()
      })
    );
  }

  render() {
    const { currentUser, restaurants } = this.state;
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Contact List App</h1>
        </header>
        {!currentUser && <SignIn />}
        {currentUser && <CurrentUser user={currentUser} />}
        {currentUser && <NewContact belongsto={currentUser.email}/>}
      </div>
    );
  }
}

export default Application;
