import React, { useState } from 'react';

function ContactCard(props) {
  const [showAge, setShowAge] = useState(false);

  const { avatarUrl, name, email, age } = props;
  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}> Show Age</button>
        {showAge ? <p>Age: {age}</p> : null}
      </div>
    </div>
  );
}

export default ContactCard;
