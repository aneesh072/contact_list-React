import './App.css';
import ContactCard from './components/ContactCard';
import React, { useState, useEffect } from 'react';

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            avatarUrl={result.picture.large}
            Fname={result.name.first}
            Lname={result.name.last}
            email={result.email}
            age={result.dob.age}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
