
import React, { Component } from 'react'
import Letter from './Letter'
//import shuffle from 'lodash.shuffle'
//npm install --save lodash.shuffle

import './App.css';
const WORDS = ["banana", "orange", "apple", "mango"];
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class App extends Component {

  state = {
    Word: this.generateWord(),
    currentLetter: [],
    Letters: this.generateLetter(),
    selectedLetter: []
  }


  generateLetter() {
    return ALPHABET.split('');
  }

  generateWord() {
    const randomElement = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log(Array.from(randomElement));
    return Array.from(randomElement)
  }

  getLetterState(index) {
    const { selectedLetter } = this.state

    if (selectedLetter.indexOf(index) === -1) return 'hidden';
    else
      return 'visible'
  }


  handleCardClick = (index)=> {
    const { selectedLetter } = this.state
    console.log(this)
    if (selectedLetter.indexOf(index) === -1) selectedLetter.push(index)
    this.setState({ selectedLetter: selectedLetter })
    console.log(selectedLetter);


  }
  doNothing(){}


  render() {
    const { Letters, Word } = this.state
    return (
      <div className="pendu">

        {Word.map((letter, index) => (
          <Letter
            letter={letter}
            key={index}
            checked={this.getLetterState(letter)}
            onClick={this.doNothing}
          />
        ))}

        <br /><br />
        {Letters.map((letter, index) => (
          <Letter
            letter={letter}
            key={index}
            checked="keyboard"
            onClick={this.handleCardClick}
          />
        ))}
      </div>
    )
  }
}

export default App;
