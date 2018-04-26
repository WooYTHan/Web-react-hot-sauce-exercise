import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import data from "../../hotsauces.json";
import Addbox from "./Addbox";
import Details from "./Details";
import ListItem from "./ListItem";

export default class HomeList extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      showPopup: false,
      searchString: ""
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);  
  }

  handleSearchChange(event) {
    this.setState({ searchString: event.target.value});
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
   render() {
      return (
        <div className="header">
        <h1>HOT SAUCE LIST</h1>
        <input id="searchBox" type="text" key="text" value={this.state.searchString} onChange={this.handleSearchChange} placeholder="Seach Your Favourite Sauce"/>
        <div className="list">
          <ListItem state={this.props.state} delete={this.props.delete.bind(this)} searchString={this.state.searchString} />
          <div className="listItem">
            <span id="plus-button" onClick={this.togglePopup.bind(this)}>
              +
            </span>
            {this.state.showPopup ? (
              <Addbox
                onChange={this.props.handleChange}
                onSubmit={this.props.handleSubmit}
                value={this.props.state.value}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </div>
        </div>
      </div>
      );
    
  }
}