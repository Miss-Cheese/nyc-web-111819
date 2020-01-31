import React from 'react';

class Navbar extends React.Component {

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