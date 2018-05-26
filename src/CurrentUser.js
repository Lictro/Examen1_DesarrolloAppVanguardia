import React from 'react';
import {shape, string} from 'prop-types';
import {auth} from './firebase';
import './CurrentUser.css';

const CurrentUser = ({user}) => {
  return (
    <div className="CurrentUser">
      <img className="CurrentUser--photo" src={user.photoURL} alt={user.displayName} />
      <div className="CurrentUser--identification">
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: shape({displayName: string, email: string.isRequired, photoURL: string, uid: string.isRequired})
};

export default CurrentUser;
