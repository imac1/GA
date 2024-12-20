import React from 'react';
import './App.css';
import contacts from "./data/contacts.json"
import Contact from './Components/Contact'


function App() {
  
  return (
    <div className="App">
      <h1>Contact List</h1>
  

<ul>
  {
    contacts.results.map((contact)=> (
      <Contact key={contact.id} firstName={contact.name.first} lastName={contact.name.last} gender={contact.gender} image={contact.picture.thumbnail}/>
    ))
  }
</ul>





    
  
      
  
   
    </div>
  );
}

export default App;
