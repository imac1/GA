import React from 'react';
import './App.css';
import contacts from "./data/contacts.json"
import Contact from './Components/Contact'


function App() {
  
  return (
    <div className="App">
      <h1>Contact List</h1>
      {contacts.results.map(contact => (
      <Contact 
        key={contact.id} 
        name={contact.name.first} 
        email={contact.email} 
        phone={contact.phone} 
      />
    ))}
      
  
   
    </div>
  );
}

export default App;
