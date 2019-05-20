import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section>
        <ul>
          <li>Name: Sally Student</li>
          <li>Email: Sally@gmail.com</li>
          <li>Phone Number: 555-555-5555</li>
          <li>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg">
            </img>
          </li>
        </ul>
      </section>

      <section>
        <p>Education: Graduated from the University of Nebraska in 2013</p>
      </section>
      <section>
        <h2>Employment History</h2>
        <ul>
          <li>5 years as a Bartender</li>
          <li>3 years as a Bar manager</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
