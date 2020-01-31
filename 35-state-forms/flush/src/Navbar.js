import React from 'react';

class Navbar extends React.Component {

    // how to access the state of the filter from here? this.props doesn't work
    // input field will have a value attribute, which will render the state
    // on change props.changeFinter function will take the state as an argument
    // in render currently the filter only works for the bathroom type 
    
    debugger

    render() {
        // {console.log(this.props.nameSearch)}
        return (
            <div id="navbar">
                <input onChange={(event) => this.props.settingNameSearchAsState(event)} placeholder="search" />
                <div id="filter-container">
                    <div onClick={() => this.props.changeFilter("")} className="filter-item" id="all">All</div>
                    <div onClick={() => this.props.changeFilter("Gender Neutral")} className="filter-item" id="neutral">Gender Neutral</div>
                    <div onClick={() => this.props.changeFilter("Men")} className="filter-item" id="men">Men</div>
                    <div onClick={() => this.props.changeFilter("Women")} className="filter-item" id="women">Women</div>
                </div>
            </div>
        )
    }
    

}

export default Navbar;