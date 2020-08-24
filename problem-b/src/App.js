import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pets: this.props.pets };
  }

  adopt = (name) => {
    this.setState((petState) => {
      let right = _.find(petState.pets, {'name': name});
      return right.adopted = true;
    })
  }

  render() {
    return (
      <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
          </div>
          <BreedNav breeds={Object.keys(_.groupBy(this.state.pets, "breed"))} />
          <AboutNav />
          <div id="petList" className="col-9">
            <PetList pets={this.state.pets} adoptCallback={this.adopt} />
          </div>
        </div>
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
    );
  }
}

export class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }
}

export class BreedNav extends Component {
  render() {
    let breedsList = this.props.breeds;
    let pets = breedsList.map((breed) => {
      let object = <li key = { breed }> <a href = "#/">{breed}</a> </li>
      return object;
    });
    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className = "list-unstyled">
          { pets }
        </ul>
      </nav>
    );
  }
}

export class PetCard extends Component {
  render() {
    let name = this.props.pet.name
    return (
      <div className="card" onClick={this.props.adoptCallback}>
        <img className="card-img-top" src={this.props.pet.img} alt={name} />
        <div className="card-body">
          <h3 className="card-title">{name}{this.props.pet.adopted?" (Adopted)":""}</h3>
          <p className="card-text">{this.props.pet.sex + " " + this.props.pet.breed}</p>
        </div>
      </div>
    )
  }
}

export class PetList extends Component {
  render() {
    let petsName = this.props.pets.map((pet) =>
      <PetCard pet={pet} adoptCallback={() => {this.props.adoptCallback(pet.name)}}/>
    )

    return (
      <div className="card">
        <h2>Dogs for Adoption</h2>
           {petsName}
      </div>
    )
  }
}
export default App;

