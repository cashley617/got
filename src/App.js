import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

// Setting state
export default class App extends Component {
  state = {
    characters,
    clicked: [],
    score: 0,
    highscore: 0
  };

  // Function to reset the score upon a loss
  reset = () => {
    alert("You know nothing, Jon Snow");
    this.setHighScore();
    this.setState({
      clicked: [],
      score: 0
    })
  };

  // Function to set the high score 
  setHighScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
    }
  };

  // Function to sort the character cards
  sortCharacters = () => {
    this.state.characters.sort((a, b) => { return 0.5 - Math.random() });
  };

  // Click event
  clickCard = event => {
    const currentCard = event.target.id;
    const isClicked = this.state.clicked.indexOf(currentCard) > -1;

    // If character was clicked, end game + reset score + log high score
    if (isClicked) {
      this.sortCharacters();
      this.reset();
    } else {
      // Update score
      this.sortCharacters();
      this.setState(
        {
          clicked: this.state.clicked.concat(currentCard),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            this.sortCharacters();
            this.reset();
          }
        }
      );
    }
  };

  // Render Method
  render() {
    return (
      <div className="App">
        <Nav highscore={this.state.highscore} score={this.state.score} />
        <Header />
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Characters
                clickCard={this.clickCard}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

