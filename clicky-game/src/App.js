import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

export default class App extends Component {
  // Setting the initial state of things
  state = {
    characters,
    clicked: [],
    score: 0,
    highscore: 0
  };

  // sort the characters function
  sortCharacters = () => {
    this.state.characters.sort((a, b) => { return 0.5 - Math.random() });
  };

  // set the high score
  setHighScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
    }
  };

  // reset function to reset things when the game is lost
  resetStuff = () => {
    this.setHighScore();
    this.setState({
      clicked: [],
      score: 0
    })
  };

  // character click event
  characterClick = event => {
    // grab the id of the clicked character
    const currentChar = event.target.id;
    // check to see if that character has been clicked or not, are they in the state array or not?
    const isClicked = this.state.clicked.indexOf(currentChar) > -1;

    // if that character is clicked, end the game, reset the score
    if (isClicked) {
      this.sortCharacters();
      this.resetStuff();
    } else {
      // we have to update the score, sort the cards
      this.sortCharacters();
      this.setState({
        // Lance showed me this trick with the concat
        clicked: this.state.clicked.concat(currentChar),
        // increase the score
        score: this.state.score + 1
      },
        // if user gets to all 12, shuffle the cards and reset the game
        () => {
          if (this.state.score === 12) {
            this.sortCharacters();
            this.resetStuff();
          }
        });
    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className='App'>
        <Nav
          highscore={this.state.highscore}
          score={this.state.score}
        />
        <Jumbotron />
        <div className='container'>
          <div className='row'>
            {this.state.characters.map(character => (
              <FriendCard
                characterClick={this.characterClick}
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
}

