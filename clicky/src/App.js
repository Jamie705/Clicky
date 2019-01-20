import React, { Component } from "react";
import BeerCard from "./components/BeerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import beer from "./beer.json";

class App extends Component {
  // Setting this.state.beer to the beer json array
  state = {
    beer,
    score: 1,
    bestScore: 0,
    clicked: []
  };

  clickedBeer = id => {
    const clickedBeers = this.state.clicked;
    //updates score and adds 1 to each click
    this.setState({
      score: this.state.score + 1
    });

      
    //if the id has already been clicked
   if (clickedBeers.indexOf(id) === -1) {
        clickedBeers.push(id);
          console.log("This id has NOT been clicked and will be added "
          + clickedBeers,
          this.state.score + "Id: " + id
          );
    
    }
     //if array of cicked beers is not 9
    else if (clickedBeers.length === 9) {
      console.log("Winner winner chicken dinner" +
      this.state.score, clickedBeers
      )
        //reseting the score and clicked array
        this.setState({
          score: 1
        });
        this.setState({
          clicked: []
        });
    }
    else {
      console.log("Sorry that beer has been clicked already." 
      + this.state.score, clickedBeers
      )
        //reseting the score and clicked array
        this.setState({
          score: 1
        });
        this.setState({
          clicked: []
        });
      };
    };

  //function to reset score and clicked array 
  resetScore = () => {
    this.setState({
      score:0
    });
    this.setState({
      clicked: []
    });
  }

  //function to reset score and send win message
  // winner = () => {
  //   resetScore();
  //   <p>"You win"</p> 
  // }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // Map over this.state.beer and render a BeerCard component for each beer object
  render() {
    return (
      <Wrapper>
        <Title>Beer List</Title>
        {this.state.beer.map(beer => (
          <BeerCard
            clickedBeer={this.clickedBeer}
            id={beer.id}
            key={beer.id}
            name={beer.name}
            image={beer.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
