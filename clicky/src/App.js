import React, { Component } from "react";
import BeerCard from "./components/BeerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import beer from "./beer.json";

 
class App extends Component {
  // Setting this.state.beer to the beer json array
  state = {
    beer,
    score: 0,
    bestScore: 0,
    clicked: []
  };

  shuffleArray = (array) => {
    let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
  }

  //When beer is clicked
  clickedBeer = id => {
    const clickedBeers = this.state.clicked;
    //keeping score
    this.keepScore();
    
    //updates score and adds 1 to each click
    this.setState({
      score: this.state.score + 1
    });

    this.shuffleArray(beer);

      //if the id has already been clicked
      if (clickedBeers.indexOf(id) === -1) {
          clickedBeers.push(id);
            console.log("Id has NOT been clicked :"
            + clickedBeers,
            this.state.score + "Id: " + id
            );
            
      }
      //if array of cicked beers is not 9
      else if (clickedBeers.length === 9) {
        console.log("Winner winner chicken dinner" +
        this.state.score, clickedBeers
        )
          //reseting the score and clicked array and gennerate Win message.
          this.winner();
          this.resetScore();
      }
      // clicked on beer twice game is lost
      else {
        console.log("Sorry that beer has been clicked already. You lost" 
        + this.state.score, clickedBeers
        )
          //reseting the score and clicked array
          this.resetScore();
        };
      };

  //function to reset score and clicked array 
  resetScore = () => {
    this.setState({
      score: 0
    });
    this.setState({
      clicked: []
    });
  }

  //function to keep score
  keepScore =()=> {
    var highScore = 0;
    const currentScore = this.state.score

    if (highScore < currentScore) {
      highScore = currentScore;
      //update score
      this.setState({
        bestScore: highScore
      });
    }
    else if (highScore > this.state.bestScore) {
      //update score
      highScore = this.state.bestScore;
    
      console.log("HighScore: " + highScore, "Score: " + this.state.bestScore)
    }
  }

  //function to message winner
  winner = () => {
  const message= "Winner Winner!!"
  console.log(message)
  return message;
  }

  // Map over this.state.beer and render a BeerCard component for each beer object
  render() {
    
    return (
      <div>
        <Nav>Tricky Clicky Beer Game<br></br>Score: {this.state.score} <br></br> High Score: {this.state.bestScore}</Nav>
        <Wrapper>
          < Title >{this.winner()}</Title>
          {this.state.beer.map(beer => (
            <BeerCard
              shuffleArray = {this.shuffleArray(beer)}
              clickedBeer={this.clickedBeer}
              id={beer.id}
              key={beer.id}
              name={beer.name}
              image={beer.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
