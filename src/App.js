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
    clicked: [],
    message: ""
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
    this.resetMessage();

    //keeping score
    this.keepScore();
    
    //updates score and adds 1 to each click
    this.setState({
      score: this.state.score + 1
    });

    this.shuffleArray(beer);

      //if the id has not been clicked
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
          this.setState({
            message: "You Win!!!"
          });

          this.resetScore();
          this.resetMessage();
      }
      // clicked on beer twice game is lost
      else {
        console.log("Sorry that beer has been clicked already. You lost" 
        + this.state.score, clickedBeers
        )
          this.setState({
            message: "Sorry, you Lost!!!"
          });
          //reseting the score and clicked array
          this.resetScore();
          this.resetMessage();
                 
        };
      };

  //function to reset score and clicked array 
  resetScore = () => {
    this.setState({
      score: 0,
      clicked: [],
    });
  }

  resetMessage = () => {
    if (this.state.score === 0){
      this.setState({
        message: " "
      });
    }
  }
  //function to keep Higest score
  keepScore =()=> {
    var highScore = this.state.bestScore
    const currentScore = this.state.score

    if (currentScore > highScore) {
      //update score
      highScore = currentScore;

      this.setState({
        bestScore: highScore
      });
    }
    else {
      highScore =  this.state.bestScore;
      //update score
      this.setState({
        bestScore: highScore
      });
    }
  }

  // Map over this.state.beer and render a BeerCard component for each beer object
  render() {
    
    return (
      <div>
        <Nav>Tricky Clicky Beer Game<br></br>
        Score: {this.state.score}<br></br> 
        High Score: {this.state.bestScore}
        </Nav>
        <Wrapper>
          < Title >{this.state.message}</Title>
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
