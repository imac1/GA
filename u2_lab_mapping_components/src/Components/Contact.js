import React from 'react';

const Name = ({ name }) => <h3>{name}</h3>;
const Email = ({ email }) => <p>Email: {email}</p>;
const Phone = ({ phone }) => <p>Phone: {phone}</p>;

const Contact = ({ name, email, phone }) => (
  <div className="contact">
    <Name name={name} />
    <Email email={email} />
    <Phone phone={phone} />
  </div>
);
export default Contact;