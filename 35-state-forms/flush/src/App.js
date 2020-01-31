import React from 'react';
import './App.css';
import BathroomCard from './BathroomCard';
import Navbar from './Navbar';

class App extends React.Component {

  state = {
    bathrooms: [],
    filter: '',
    nameSearch: ''
  }

  handleAddReview = (reviewInfo) => {
    // using map to find a single object in an array of objects and make some change JUST TO THAT ONE 
    let newBathrooms = this.state.bathrooms.map(bathroom => {
      if(bathroom.id === reviewInfo.bathroomId){
          bathroom.reviews.push(reviewInfo)
      }
      return bathroom
    })
    
    this.setState({ bathrooms: newBathrooms })
  }

  changeFilter = (newFilter) => {
    this.setState({ filter: newFilter})
  }

  settingNameSearchAsState = (event) => {
    this.setState({
      nameSearch: event.target.value.toLowerCase()
    })
  }

  

  getBathrooms = () => {
    fetch('http://localhost:3000/bathrooms?_embed=reviews')
      .then(res => res.json())
      .then(data => {
        this.setState({ bathrooms: data })
      })
  }

  render(){

    
    let displayedBathrooms = [...this.state.bathrooms]

      if (this.state.nameSearch) {
        displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.location.toLowerCase().includes(this.state.nameSearch))
      }
      
    displayedBathrooms = displayedBathrooms.filter(bathroom => bathroom.type.includes(this.state.filter))
    

    return (
      <div className="App">
        <h1>Royal 👑 Flush</h1>
        <button className="filter-item" onClick={this.getBathrooms}>Flush!</button>
        <Navbar changeFilter={this.changeFilter} nameSearch={this.state.nameSearch} settingNameSearchAsState={this.settingNameSearchAsState}/>
        {this.state.bathrooms.length === 0 && <div>press flush</div>}
        {displayedBathrooms.map(({id, location, image, type, reviews}) => (
          <BathroomCard 
            key={id} 
            id={id}
            name={location} 
            image={image}
            type={type}
            reviews={reviews}
            handleAddReview={this.handleAddReview}/>
        ))}
     </div>
    );
  }

}

/**
 * arrow func versions ===> left side 
 * () => {}
 * justOne => {}
 * ({butIfItsAnObject: true}) => {}
 * (more, than, one) => {}
 * 
 * 
 * arrow func versions ===> right side
 * implicit vs explicit returns
 * () => { someBehaviorHere }    NEEDS EXPLICIT RETURN
 * () => ({ returningAnObj: true }) RETURNING OBJECT NEEDS PARENS
 * () => isRaining ?  'rain' : "sunshine" // implicitly returns either "rain" or "sunshine"
 * 
 */

export default App;
