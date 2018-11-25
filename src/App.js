import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import AboutMe from './components/aboutMe.js';
import ContactMe from './components/contactMe.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < NavBar />
          <div className="neverGiveUp" alt="Women-doing-a-pull-up">
            <h1 className="logo">Never Give Up</h1>
            <h2 className="text-info">Get into your best shape ever!</h2>
            <input className="meals" type="button" value="Meal Planning" />
            <input className="workouts" type="button" value="Workout Sessions" />
            <button><a href = "https://www.advocare.com/140262771" target = "_blank" rel = "noopener noreferrer">Supplements</a>
            </button>
          </div>
        </header>
        <AboutMe/>
        <ContactMe/>
      </div>
    );
  }
}

export default App;
