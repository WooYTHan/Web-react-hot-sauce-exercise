import React, { Component } from "react";
import data from "../../hotsauces.json";
import Addbox from "./Addbox";
import Details from "./Details";
import ListItem  from "./ListItem";

import HomeList from "./HomeList";

import { Link, Route, Switch } from "react-router-dom";

export default class SauceList extends React.Component {
  constructor() {
    super();
    this.state = {
      sauce: data.list,
      value: {
        id: "",
        title: "",
        subtitle: "",
        description: "",
        imageURL:""
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = Object.assign({}, this.state.value);
    value[event.target.name] = event.target.value;
    this.setState({ value });
  }

  handleSubmit(event) {
  	var duplicate = this.state.sauce.filter(x => x.title === this.state.value.title);
    const newState = this.state.sauce.slice();
    this.state.value.id = this.state.sauce.length;
    if(this.state.value.imageURL == "" || this.state.value.title == "" || this.state.value.subtitle == ""){
        alert("Please complete the form.");
    }
    else if(duplicate.length != 0){
    	alert("Sauce already in the list");
    }
    else{
    	newState.push(this.state.value);
    	this.setState({ sauce: newState });
    }
    event.preventDefault();
  }

  delete(item) {
    const newState = this.state.sauce.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
    }
    this.setState({ sauce: newState });
    item.preventDefault();
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={({ match }) => (
            <HomeList 
            delete={this.delete.bind(this)} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}
            state={this.state}
            />
          )} />
        <Route
          path="/sauceList/:title/:id"
          render={({ match }) => (
            <Details value={match.params.title} sauce={this.state.sauce} />
          )}
        />
      </div>
    );
  }
}
